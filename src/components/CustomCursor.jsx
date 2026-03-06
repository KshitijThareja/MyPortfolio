"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [hoverState, setHoverState] = useState("default");
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Check if device supports touch
        if (typeof window !== "undefined") {
            const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
            setIsTouchDevice(hasTouch);
        }
        const updateMousePosition = (e) => {
            if (!isVisible) setIsVisible(true);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const tagName = target.tagName ? target.tagName.toLowerCase() : "";
            const computedStyle = window.getComputedStyle(target);

            if (target.closest(".no-custom-cursor")) {
                setHoverState("hidden");
                return;
            }

            if (
                tagName === "button" ||
                tagName === "a" ||
                target.closest("button") ||
                target.closest("a") ||
                computedStyle.cursor === "pointer"
            ) {
                setHoverState("pointer");
            } else if (
                ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "li", "th", "td"].includes(tagName) ||
                computedStyle.cursor === "text"
            ) {
                setHoverState("text");
            } else {
                setHoverState("default");
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible]);

    // Don't render on touch devices
    if (isTouchDevice || !isVisible) return null;

    const variantsRing = {
        default: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            width: 40,
            height: 40,
            scale: 1,
            backgroundColor: "transparent",
            border: "2px solid #2ECC71", // theme's neon green
            borderRadius: "50%",
            opacity: 0.6,
            mixBlendMode: "normal",
            transition: {
                type: "spring",
                mass: 0.1,
                stiffness: 400,
                damping: 28,
                restDelta: 0.001
            },
        },
        pointer: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            width: 40,
            height: 40,
            scale: 1.5,
            backgroundColor: "#2ECC71",
            border: "2px solid transparent",
            borderRadius: "50%",
            opacity: 0.4,
            mixBlendMode: "normal",
            transition: {
                type: "spring",
                mass: 0.1,
                stiffness: 400,
                damping: 28,
            },
        },
        text: {
            x: mousePosition.x - 40, // offset by half size
            y: mousePosition.y - 40,
            width: 80,
            height: 80,
            scale: 1,
            backgroundColor: "#ebf0ec", // Inverse/bright highlight
            border: "none",
            borderRadius: "50%",
            opacity: 1,
            mixBlendMode: "difference", // This makes text visible underneath as inversed
            transition: {
                type: "spring",
                mass: 0.05,
                stiffness: 700,
                damping: 20,
            }
        },
        hidden: {
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            opacity: 0,
            scale: 0,
            transition: { duration: 0.1 }
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
        pointer: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0,
            opacity: 0,
        },
        text: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0,
            opacity: 0,
            transition: {
                duration: 0.1
            }
        },
        hidden: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: 0,
            opacity: 0,
            transition: { duration: 0.1 }
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] hide1:hidden"
                variants={variantsRing}
                animate={hoverState}
            />
            <motion.div
                className="fixed top-0 left-0 w-[8px] h-[8px] bg-[#2ECC71] rounded-full pointer-events-none z-[9999] hide1:hidden"
                variants={variantsDot}
                animate={hoverState}
            />
        </>
    );
};

export default CustomCursor;
