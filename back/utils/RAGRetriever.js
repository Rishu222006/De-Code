// import rules from "../data/universalRules.json" assert { type: "json" };

// export function detectLanguage(code) {
//     if (code.includes("import ") && code.includes("from")) return "JavaScript/TypeScript";
//     if (code.includes("def ") && code.includes(":")) return "Python";
//     if (code.includes("public static void main")) return "Java";
//     if (code.includes("#include")) return "C/C++";
//     if (code.includes("func ") && code.includes("{")) return "Go";
//     if (code.includes("fn ") && code.includes("{")) return "Rust";
//     return "Unknown";
// }

// export function retrieveRelevantRules(code) {
//     const lowerCode = code.toLowerCase();

//     let scored = rules.map(rule => {
//         let score = 0;
//         rule.tags.forEach(tag => {
//             if (lowerCode.includes(tag)) score++;
//         });
//         return { ...rule, score };
//     });

//     scored.sort((a, b) => b.score - a.score);

//     return scored.slice(0, 4); // top 4 most relevant
// }



import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load JSON manually
const rulesPath = path.join(__dirname, "./RAGRules.json");
const rules = JSON.parse(fs.readFileSync(rulesPath, "utf-8"));

export function detectLanguage(code) {
    const c = code.toLowerCase();

    const checks = [
        {
            lang: "JavaScript",
            keywords: ["function", "console.log", "=>", "require(", "module.exports"]
        },
        {
            lang: "TypeScript",
            keywords: ["interface ", "implements ", ": string", ": number", "type "]
        },
        {
            lang: "Python",
            keywords: ["def ", "print(", "self", "none", "elif ", "import "]
        },
        {
            lang: "Java",
            keywords: ["public class", "system.out.println", "static void main"]
        },
        {
            lang: "C++",
            keywords: ["#include", "std::", "cout<<", "cin>>"]
        },
        {
            lang: "C",
            keywords: ["#include<stdio.h>", "printf(", "scanf("]
        },
        {
            lang: "Go",
            keywords: ["package main", "fmt.print", "func ", ":="]
        },
        {
            lang: "Rust",
            keywords: ["fn main", "println!", "let mut"]
        },
        {
            lang: "PHP",
            keywords: ["<?php", "echo ", "$"]
        },
        {
            lang: "Ruby",
            keywords: ["def ", "puts ", "end"]
        },
        {
            lang: "Kotlin",
            keywords: ["fun main", "val ", "var "]
        },
        {
            lang: "Swift",
            keywords: ["import foundation", "let ", "var ", "func "]
        },
        {
            lang: "SQL",
            keywords: ["select ", "insert ", "update ", "delete ", "create table"]
        },
        {
            lang: "Shell",
            keywords: ["#!/bin/bash", "echo ", "fi", "done"]
        },
        {
            lang: "HTML",
            keywords: ["<html", "<div", "<body", "<head"]
        },
        {
            lang: "CSS",
            keywords: ["{", "}", "color:", "@media"]
        }
    ];

    let bestMatch = { lang: "Unknown", score: 0 };

    for (const check of checks) {
        let score = 0;

        for (const word of check.keywords) {
            if (c.includes(word)) {
                score++;
            }
        }

        if (score > bestMatch.score) {
            bestMatch = { lang: check.lang, score };
        }
    }

    return bestMatch.score > 0 ? bestMatch.lang : "Unknown";
}

export function retrieveRelevantRules(code) {
    const lowerCode = code.toLowerCase();

    let scored = rules.map(rule => {
        let score = 0;
        rule.tags.forEach(tag => {
            if (lowerCode.includes(tag)) score++;
        });
        return { ...rule, score };
    });

    scored.sort((a, b) => b.score - a.score);

    return scored.slice(0, 4);
}