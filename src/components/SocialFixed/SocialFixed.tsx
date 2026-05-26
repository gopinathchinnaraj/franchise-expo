"use client";

import Link from "next/link";
import styles from "./SocialFixed.module.css";

import { Sparkles } from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";

export default function SocialFixed() {
    return (
        <div className={styles.socialFixed}>

            <Link
                href="#"
                className={styles.socialBtn}
            >
                <Sparkles size={28} />
            </Link>

            <Link
                href="https://facebook.com"
                target="_blank"
                className={styles.socialBtn}
            >
                <FaFacebookF size={24} />
            </Link>

            <Link
                href="https://instagram.com"
                target="_blank"
                className={styles.socialBtn}
            >
                <FaInstagram size={24} />
            </Link>

        </div>
    );
}