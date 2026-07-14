'use client';

import { useState, useEffect } from 'react';
import {
  Building2,
  Package,
  Tag,
  FileText,
  Edit,
  CheckCircle,
  XCircle,
  AlertCircle,
  Upload,
  Save,
  Home,
} from 'lucide-react';

// Sub-components
import { ProfileTab } from './components/ProfileTab';
import { ProductsTab } from './components/ProductsTab';
import { BrandsTab } from './components/BrandsTab';
import { BrochuresTab } from './components/BrochuresTab';
import { BoothTab } from './components/BoothTab';

// Types & Options
import {
  ExhibitorProfile,
  Metadata,
  StallDetails,
} from './types';

// API Configuration
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '').replace(/\/api$/, '');

export default function ExhibitorDashboard() {
  const [activeTab, setActiveTab] = useState<'profile' | 'products' | 'brands' | 'brochures' | 'booth'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState<string | null>(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);

  // Profile State
  const [profile, setProfile] = useState<ExhibitorProfile>({
    id: '',
    companyName: '',
    shortName: '',
    registrationNumber: '',
    yearEstablished: '',
    companySize: '',
    companyType: '',
    contactPerson: {
      name: '',
      jobTitle: '',
      email: '',
      phone: '',
      alternatePhone: '',
    },
    exhibition: {
      pavilion: '',
      hall: '',
      standNumber: '',
    },
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      countryCode: '',
      postalCode: '',
    },
    sector: [],
    about: '',
    mission: '',
    vision: '',
    socialMedia: {
      website: '',
      linkedin: '',
      twitter: '',
      facebook: '',
      instagram: '',
    },
    products: [],
    brands: [],
    brochures: [],
    boothNumber: '',
    boothSize: '',
    boothType: '',
    boothDimensions: '',
    boothNotes: '',
    boothStatus: 'pending',
    status: 'active',
    createdAt: '',
    updatedAt: '',
  });

  // Load all exhibitor data
  useEffect(() => {
    fetchAllData();
  }, []);

  const apiCall = async (endpoint: string, options: RequestInit = {}, isFormData = false) => {
    const token = localStorage.getItem('exhibitor_token') || localStorage.getItem('token');
    const headers: HeadersInit = {};

    if (!isFormData) {
      headers['Content-Type'] = 'application/json';
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          ...headers,
          ...options.headers,
        },
        credentials: 'include',
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error('API Error Response:', responseData);
        throw new Error(responseData.error || responseData.message || `HTTP error! status: ${response.status}`);
      }

      return responseData;
    } catch (error) {
      console.error('API Call Error:', error);
      throw error;
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    setShowError(null);

    try {
      await fetchExhibitorProfile();
      await Promise.all([
        fetchProducts(),
        fetchBrands(),
        fetchBrochures(),
        fetchBoothData(),
      ]);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setShowError(error.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const fetchExhibitorProfile = async () => {
    try {
      const result = await apiCall('/api/exhibitorDashboard/profile');

      console.log('📥 Raw API response:', result);

      if (result.success) {
        const apiData = result.data;

        // Extract metadata if it exists
        let metadata: Metadata = {};
        if (apiData.metadata) {
          if (typeof apiData.metadata === 'string') {
            try {
              metadata = JSON.parse(apiData.metadata) as Metadata;
            } catch (e) {
              console.error('Error parsing metadata:', e);
            }
          } else if (typeof apiData.metadata === 'object') {
            metadata = apiData.metadata as Metadata;
          }
        }

        console.log('📦 Extracted metadata:', metadata);
        console.log('📦 Logo URL from metadata:', metadata.logoUrl);

        // Also check if logoUrl is directly in apiData
        const logoUrl = metadata.logoUrl || apiData.logoUrl || '';
        console.log('📦 Final logo URL:', logoUrl);

        // Parse stallDetails for booth information
        let stallDetails: StallDetails = {};
        if (apiData.stallDetails) {
          if (typeof apiData.stallDetails === 'string') {
            try {
              stallDetails = JSON.parse(apiData.stallDetails) as StallDetails;
            } catch (e) {
              console.error('Error parsing stallDetails:', e);
            }
          } else if (typeof apiData.stallDetails === 'object') {
            stallDetails = apiData.stallDetails as StallDetails;
          }
        }

        // Build contact person object
        const contactPersonObj = {
          name: apiData.contactPerson?.name || metadata.contact_name || apiData.name || '',
          jobTitle: apiData.contactPerson?.jobTitle || metadata.contact_job_title || '',
          email: apiData.email || metadata.email || '',
          phone: apiData.phone || metadata.phone || '',
          alternatePhone: apiData.contactPerson?.alternatePhone || metadata.alternate_phone || ''
        };

        // Build social media object
        const socialMediaObj = {
          website: apiData.website || metadata.website || '',
          linkedin: apiData.socialMedia?.linkedin || metadata.linkedin || '',
          twitter: apiData.socialMedia?.twitter || metadata.twitter || '',
          facebook: apiData.socialMedia?.facebook || metadata.facebook || '',
          instagram: apiData.socialMedia?.instagram || metadata.instagram || ''
        };

        // Build exhibition object
        const exhibitionObj = {
          pavilion: apiData.exhibition?.pavilion || metadata.pavilion || '',
          hall: apiData.exhibition?.hall || metadata.hall || '',
          standNumber: apiData.boothNumber || metadata.boothNumber || apiData.exhibition?.standNumber || '',
          floorPlanUrl: apiData.exhibition?.floorPlanUrl || metadata.floor_plan_url || ''
        };

        // Build address object
        let addressObj = {
          street: '',
          city: '',
          state: '',
          country: '',
          countryCode: '',
          postalCode: ''
        };

        if (apiData.address && typeof apiData.address === 'object') {
          addressObj = {
            street: apiData.address.street || metadata.address_street || '',
            city: apiData.address.city || metadata.address_city || '',
            state: apiData.address.state || metadata.address_state || '',
            country: apiData.address.country || metadata.address_country || '',
            countryCode: apiData.address.countryCode || metadata.address_country_code || '',
            postalCode: apiData.address.postalCode || metadata.address_postal_code || ''
          };
        } else {
          addressObj = {
            street: metadata.address_street || metadata.address?.street || '',
            city: metadata.address_city || metadata.address?.city || '',
            state: metadata.address_state || metadata.address?.state || '',
            country: metadata.address_country || metadata.address?.country || '',
            countryCode: metadata.address_country_code || metadata.address?.countryCode || '',
            postalCode: metadata.address_postal_code || metadata.address?.postalCode || ''
          };
        }

        // Parse sector
        let sectorArray: string[] = [];
        if (apiData.sector) {
          if (typeof apiData.sector === 'string') {
            sectorArray = apiData.sector.split(',').map((s: string) => s.trim()).filter(Boolean);
          } else if (Array.isArray(apiData.sector)) {
            sectorArray = apiData.sector;
          }
        } else if (metadata.sector) {
          if (typeof metadata.sector === 'string') {
            sectorArray = metadata.sector.split(',').map((s: string) => s.trim()).filter(Boolean);
          } else if (Array.isArray(metadata.sector)) {
            sectorArray = metadata.sector;
          }
        }

        setProfile(prev => ({
          ...prev,
          id: apiData.id || '',
          // Basic fields from main table
          companyName: apiData.company || metadata.companyName || '',
          shortName: apiData.shortName || metadata.shortName || metadata.short_name || '',
          registrationNumber: apiData.registrationNumber || metadata.registrationNumber || metadata.registration_number || '',
          yearEstablished: apiData.yearEstablished || metadata.yearEstablished || metadata.year_established || '',
          companySize: apiData.companySize || metadata.companySize || metadata.company_size || '',
          companyType: apiData.companyType || metadata.companyType || metadata.company_type || '',

          // Contact person
          contactPerson: contactPersonObj,

          // Exhibition
          exhibition: exhibitionObj,

          // Address
          address: addressObj,

          // Sector
          sector: sectorArray,

          // Business details
          about: apiData.about || metadata.about || apiData.description || '',
          mission: apiData.mission || metadata.mission || '',
          vision: apiData.vision || metadata.vision || '',

          // Social media
          socialMedia: socialMediaObj,

          // Logo - IMPORTANT: Set the logo URL
          logoUrl: logoUrl,

          // Status
          status: apiData.status || 'active',

          // Timestamps
          createdAt: apiData.createdAt || '',
          updatedAt: apiData.updatedAt || '',

          // Booth fields
          boothNumber: apiData.boothNumber || metadata.boothNumber || exhibitionObj.standNumber || prev.boothNumber,
          boothSize: stallDetails.size || apiData.boothSize || metadata.boothSize || metadata.booth_size || prev.boothSize,
          boothType: stallDetails.type || apiData.boothType || metadata.boothType || metadata.booth_type || prev.boothType,
          boothDimensions: stallDetails.dimensions || apiData.boothDimensions || metadata.boothDimensions || metadata.booth_dimensions || prev.boothDimensions,
          boothNotes: stallDetails.notes || apiData.boothNotes || metadata.boothNotes || metadata.booth_notes || prev.boothNotes,
          boothStatus: apiData.boothStatus || metadata.boothStatus || metadata.booth_status || stallDetails.status || prev.boothStatus || 'pending',
          boothPrice: stallDetails.price || apiData.boothPrice || metadata.boothPrice || metadata.booth_price || prev.boothPrice,
        }));

        // Force a re-render after setting the logo
        setTimeout(() => {
          console.log('✅ Logo URL after profile load:', logoUrl);
        }, 100);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  };

  const fetchProducts = async () => {
    try {
      const result = await apiCall('/api/exhibitorDashboard/products');
      if (result.success) {
        setProfile(prev => ({
          ...prev,
          products: Array.isArray(result.data) ? result.data : []
        }));
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchBoothData = async () => {
    try {
      const result = await apiCall('/api/exhibitorDashboard/booth', {
        method: 'GET',
      }).catch(() => null);

      if (result && result.success) {
        const boothData = result.data;
        console.log('Booth data from separate endpoint:', boothData);

        let boothPrice = '';
        if (boothData.stallDetails) {
          const stallDetails = typeof boothData.stallDetails === 'string'
            ? JSON.parse(boothData.stallDetails)
            : boothData.stallDetails;
          boothPrice = stallDetails.price || stallDetails.boothPrice || '';
        }

        setProfile(prev => ({
          ...prev,
          boothNumber: boothData.boothNumber || boothData.number || prev.boothNumber,
          boothSize: boothData.boothSize || boothData.size || prev.boothSize,
          boothType: boothData.boothType || boothData.type || prev.boothType,
          boothDimensions: boothData.boothDimensions || boothData.dimensions || prev.boothDimensions,
          boothNotes: boothData.boothNotes || boothData.notes || prev.boothNotes,
          boothStatus: boothData.boothStatus || boothData.status || prev.boothStatus,
          boothPrice: boothPrice || boothData.boothPrice || boothData.price || boothData.amount || prev.boothPrice,
        }));
      }
    } catch (error) {
      console.log('No separate booth endpoint found');
    }
  };

  const fetchBrands = async () => {
    try {
      const result = await apiCall('/api/exhibitorDashboard/brands');
      if (result.success) {
        setProfile(prev => ({
          ...prev,
          brands: Array.isArray(result.data) ? result.data : []
        }));
      }
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  const fetchBrochures = async () => {
    try {
      const result = await apiCall('/api/exhibitorDashboard/brochures');
      if (result.success) {
        setProfile(prev => ({
          ...prev,
          brochures: Array.isArray(result.data) ? result.data : []
        }));
      }
    } catch (error) {
      console.error('Error fetching brochures:', error);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingLogo(true);
    setShowError(null);

    try {
      console.log('📤 Uploading logo...');

      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'exhibitor-logos');

      const uploadResult = await apiCall('/api/upload', {
        method: 'POST',
        body: formData,
      }, true);

      console.log('📥 Upload result:', uploadResult);

      if (uploadResult.success) {
        const logoUrl = uploadResult.data.url;
        console.log('✅ Logo uploaded successfully, URL:', logoUrl);

        setProfile(prev => ({
          ...prev,
          logo: file,
          logoUrl: logoUrl,
        }));

        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        throw new Error(uploadResult.error || 'Failed to upload logo');
      }
    } catch (error: any) {
      console.error('Error uploading logo:', error);
      setShowError(error.message || 'Failed to upload logo');
    } finally {
      setUploadingLogo(false);
    }
  };

  const handleSectorToggle = (sector: string) => {
    if (profile.sector.includes(sector)) {
      setProfile({
        ...profile,
        sector: profile.sector.filter(s => s !== sector),
      });
    } else {
      setProfile({
        ...profile,
        sector: [...profile.sector, sector],
      });
    }
  };

  const handleCancel = async () => {
    setIsEditing(false);
    setShowError(null);
    try {
      await fetchExhibitorProfile();
      await fetchBoothData();
    } catch (error: any) {
      console.error('Error resetting profile:', error);
      setShowError(error.message || 'Failed to revert changes');
    }
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    setShowError(null);

    try {
      console.log('💾 Saving profile with logo URL:', profile.logoUrl);

      const metadata: Metadata = {
        shortName: profile.shortName,
        registrationNumber: profile.registrationNumber,
        yearEstablished: profile.yearEstablished,
        companySize: profile.companySize,
        companyType: profile.companyType,
        logoUrl: profile.logoUrl || '',

        contact_name: profile.contactPerson.name,
        contact_job_title: profile.contactPerson.jobTitle,
        alternate_phone: profile.contactPerson.alternatePhone,
        contactPerson: profile.contactPerson,

        pavilion: profile.exhibition.pavilion,
        hall: profile.exhibition.hall,
        exhibition: {
          pavilion: profile.exhibition.pavilion,
          hall: profile.exhibition.hall,
          standNumber: profile.exhibition.standNumber || profile.boothNumber,
          floorPlanUrl: profile.exhibition.floorPlanUrl || ''
        },

        address_street: profile.address.street,
        address_city: profile.address.city,
        address_state: profile.address.state,
        address_country: profile.address.country,
        address_country_code: profile.address.countryCode,
        address_postal_code: profile.address.postalCode,
        address: {
          street: profile.address.street,
          city: profile.address.city,
          state: profile.address.state,
          country: profile.address.country,
          countryCode: profile.address.countryCode,
          postalCode: profile.address.postalCode
        },

        about: profile.about,
        mission: profile.mission,
        vision: profile.vision,

        website: profile.socialMedia.website,
        linkedin: profile.socialMedia.linkedin,
        twitter: profile.socialMedia.twitter,
        facebook: profile.socialMedia.facebook,
        instagram: profile.socialMedia.instagram,
        socialMedia: profile.socialMedia,

        boothSize: profile.boothSize,
        boothType: profile.boothType,
        boothDimensions: profile.boothDimensions,
        boothNotes: profile.boothNotes,
        boothStatus: profile.boothStatus,
        boothPrice: profile.boothPrice
      };

      const stallDetails: StallDetails = {
        size: profile.boothSize || '',
        type: profile.boothType || '',
        dimensions: profile.boothDimensions || '',
        notes: profile.boothNotes || '',
        price: profile.boothPrice || ''
      };

      const payload = {
        name: profile.contactPerson.name || profile.companyName,
        email: profile.contactPerson.email,
        company: profile.companyName,
        phone: profile.contactPerson.phone,
        website: profile.socialMedia.website,
        sector: profile.sector.join(', '),
        boothNumber: profile.exhibition.standNumber || profile.boothNumber,
        address: [
          profile.address.street,
          profile.address.city,
          profile.address.state,
          profile.address.country,
          profile.address.postalCode
        ].filter(Boolean).join(', '),

        metadata: metadata,
        stallDetails: stallDetails,
        status: profile.status
      };

      console.log('📤 Sending payload with metadata:', JSON.stringify(payload, null, 2));

      const result = await apiCall(
        "/api/exhibitorDashboard/profile",
        {
          method: "PUT",
          body: JSON.stringify(payload),
        }
      );

      if (result.success) {
        console.log('✅ Profile saved successfully');
        setShowSuccess(true);
        setIsEditing(false);

        setTimeout(async () => {
          await fetchExhibitorProfile();
          await fetchBoothData();
          setShowSuccess(false);
        }, 1500);
      } else {
        throw new Error(result.message || 'Failed to save profile');
      }
    } catch (error: any) {
      console.error("❌ Error saving profile:", error);
      setShowError(error.message || "Failed to save profile. Please check your connection and try again.");
    } finally {
      setSaving(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'paid':
      case 'approved':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
      case 'rejected':
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return 'Invalid date';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Exhibitor Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage your exhibition presence and account
              </p>
            </div>

            <div className="flex items-center gap-3">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Edit size={16} className="mr-2" />
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={handleCancel}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleSaveProfile}
                    disabled={saving}
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    <Save size={16} className="mr-2" />
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-20 right-4 z-50 animate-slide-down">
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <CheckCircle size={20} className="text-green-500" />
            <span>Operation completed successfully!</span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {showError && (
        <div className="fixed top-20 right-4 z-50 animate-slide-down">
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2">
            <AlertCircle size={20} className="text-red-500" />
            <span>{showError}</span>
            <button onClick={() => setShowError(null)} className="ml-2 text-red-500 hover:text-red-700">
              <XCircle size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 shrink-0">
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden sticky top-24">
              {/* Profile Summary */}
              <div className="p-6 text-center border-b">
                <div className="relative inline-block">
                  <div className={`w-24 h-24 mx-auto rounded-2xl border-2 border-gray-200 flex items-center justify-center overflow-hidden ${profile.logoUrl ? '' : 'bg-gray-100'
                    }`}>
                    {profile.logoUrl ? (
                      <img
                        src={profile.logoUrl}
                        alt={profile.companyName}
                        className="object-contain w-full h-full"
                        onError={(e) => {
                          console.error('Logo failed to load:', profile.logoUrl);
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.add('bg-gray-100');
                        }}
                      />
                    ) : (
                      <div className="text-3xl font-bold text-gray-400">
                        {profile.companyName ? profile.companyName.substring(0, 2).toUpperCase() : 'EX'}
                      </div>
                    )}
                  </div>
                  {isEditing && (
                    <label className={`absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors ${uploadingLogo ? 'opacity-50 cursor-wait' : ''}`}>
                      {uploadingLogo ? (
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                      ) : (
                        <Upload size={14} className="text-white" />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                        disabled={uploadingLogo}
                      />
                    </label>
                  )}
                </div>

                <h3 className="font-semibold text-gray-900 mt-4">
                  {profile.companyName || 'Your Company Name'}
                </h3>
                {profile.shortName && (
                  <p className="text-sm text-gray-500">{profile.shortName}</p>
                )}

                {profile.status && (
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(profile.status)}`}>
                      {profile.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Navigation Tabs */}
              <div className="p-4">
                <div className="space-y-1">
                  {[
                    { id: 'profile', label: 'Company Profile', icon: Building2 },
                    { id: 'products', label: 'Products & Services', icon: Package, count: profile.products.length },
                    { id: 'brands', label: 'Brands', icon: Tag, count: profile.brands.length },
                    { id: 'brochures', label: 'Brochures', icon: FileText, count: profile.brochures.length },
                    { id: 'booth', label: 'Booth Details', icon: Home, count: profile.boothNumber ? 1 : 0 },
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} />
                          <span>{tab.label}</span>
                        </div>
                        {tab.count !== undefined && tab.count > 0 && (
                          <span className={`px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-700'
                            }`}>
                            {tab.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Status */}
              <div className="p-4 border-t bg-gray-50">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600">Profile Published</span>
                </div>
                {profile.updatedAt && (
                  <p className="text-xs text-gray-500 mt-2">
                    Last updated: {formatDate(profile.updatedAt)}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <ProfileTab
                  profile={profile}
                  setProfile={setProfile}
                  isEditing={isEditing}
                  handleSectorToggle={handleSectorToggle}
                />
              )}

              {/* Products Tab */}
              {activeTab === 'products' && (
                <ProductsTab
                  profile={profile}
                  setProfile={setProfile}
                  apiCall={apiCall}
                  setShowSuccess={setShowSuccess}
                  setShowError={setShowError}
                />
              )}

              {/* Brands Tab */}
              {activeTab === 'brands' && (
                <BrandsTab
                  profile={profile}
                  setProfile={setProfile}
                  apiCall={apiCall}
                  setShowSuccess={setShowSuccess}
                  setShowError={setShowError}
                />
              )}

              {/* Brochures Tab */}
              {activeTab === 'brochures' && (
                <BrochuresTab
                  profile={profile}
                  setProfile={setProfile}
                  apiCall={apiCall}
                  setShowSuccess={setShowSuccess}
                  setShowError={setShowError}
                  formatDate={formatDate}
                />
              )}

              {/* Booth Tab */}
              {activeTab === 'booth' && (
                <BoothTab
                  profile={profile}
                  setProfile={setProfile}
                  isEditing={isEditing}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}