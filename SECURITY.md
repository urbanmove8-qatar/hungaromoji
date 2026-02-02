# **Security Policy**

## **🛡️ Our Commitment to Safety**

The Urbanmove 8 team is committed to providing transparent, safe, and open-source software. **Hungaromoji** is designed to be a "Zero-Trust" client-side utility. This means we do not ask for, collect, or store any user data.

## **🔍 Transparency Report**

Unlike closed-source software or "private" operating systems, Hungaromoji operates with 100% transparency:

* **No Data Exfiltration:** The script does not possess "fetch" or "XMLHttpRequest" capabilities to send data to external servers.  
* **No Persistence:** The script runs entirely in volatile memory (RAM) and does not write to the user's disk or system registry.  
* **No Identity Requirements:** We will **NEVER** ask for government IDs, bank transfers (e.g., 10 forints), or personal information to use this software.

## **🚀 Supported Versions**

We only provide security updates and official support for the following versions:

| Version | Supported |
| :---- | :---- |
| 0.9.x | ✅ Yes |
| \< 0.8 | ❌ No (Legacy) |

## **🛠️ Security Architecture**

Hungaromoji utilizes a **DOM-Isolation** strategy:

1. **MutationObserver:** Only monitors changes to text nodes.  
2. **Forbidden Tags:** The script is hardcoded to ignore sensitive areas like \<input\>, \<textarea\>, and \<password\> fields to ensure user privacy is never compromised.  
3. **Asset Integrity:** All emoji assets are hosted on verified platforms (Penguinmod/Neocities) and served over HTTPS.

## **📞 Reporting a Vulnerability**

If you discover a security flaw or have a technical concern, please do not use public forums for the initial report to protect the community.

**How to report:**

1. Open a **Private Issue** on GitHub or contact the Urbanmove 8 lead developers.  
2. Provide a detailed description of the vulnerability and a Proof of Concept (PoC).  
3. We follow a 30-day "Responsible Disclosure" policy to fix any issues before they are made public.

### **A Message to Critics**

We welcome technical audits from legitimate security researchers. However, false claims of "malware" or "spyware" without supporting technical evidence will be treated as **libel**. Our code is open; if you claim it is a virus, point to the line of code or stay silent.

**Urbanmove 8 Qatar Sole Prop. and Urbanmove 8 Kft.** *Defending Open Source since 2025\.*
