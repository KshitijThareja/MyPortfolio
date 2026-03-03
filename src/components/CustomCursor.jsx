"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            if (!isVisible) setIsVisible(true);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === "button" ||
                target.tagName.toLowerCase() === "a" ||
                target.closest("button") ||
                target.closest("a") ||
                window.getComputedStyle(target).cursor === "pointer"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    const variantsRing = {
        default: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 1,
            backgroundColor: "transparent",
            border: "2px solid #2ECC71", // theme's neon green
            opacity: 0.6,
            transition: {
                type: "spring",
                mass: 0.1,
                stiffness: 400,
                damping: 28,
                restDelta: 0.001
            },
        },
        hover: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: 1.5,
            backgroundColor: "#2ECC71",
            border: "2px solid transparent",
            opacity: 0.4,
            transition: {
                type: "spring",
                mass: 0.1,
                stiffness: 400,
                damping: 28,
            },
        }
    };

    const variantsDot = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                mass: 0.01,
                stiffness: 800,
                damping: 20,
                restDelta: 0.001
            },
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0,
            opacity: 0,
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-[40px] h-[40px] rounded-full pointer-events-none z-[9999] hide1:hidden"
                variants={variantsRing}
                animate={isHovering ? "hover" : "default"}
            />
            <motion.div
                className="fixed top-0 left-0 w-[8px] h-[8px] bg-[#2ECC71] rounded-full pointer-events-none z-[9999] hide1:hidden"
                variants={variantsDot}
                animate={isHovering ? "hover" : "default"}
            />
        </>
    );
};

export default CustomCursor;
