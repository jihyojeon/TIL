## Software security

- A piece of software can be attacked to access restricted features, steal information, or execute harmful scripts.
- Any system is as secure as its weakest link.
- **Monitor your processes, and use automated alerts.**

## Attack Types

### 1. Decryption

- Typical attacks to decode encrypted data include brute forcing and rainbow tables.
- Rainbow tables are lists of commonly used passwords and the corresponding hashes that would result by encrypting them with popular algorithms.
- To protect you need to use longer passwords, stronger and always up-to-date algorithms.
- 뚫는 방법
  - Brute Forcing: 하나하나 다 해보기
- 해결 방법 / Cryptographic algorithms
  - Hash function!
    - Bcrypt(rounds)
    - Rainbow table: 미리 정의된...? with pwd salting
  - **pls regualarly update**

### 2. Interception

- Packet sniffing means reading the packets of data that are exchanged over a network.
  - Data packets
    - ip address
    - payload data
    - traffic control devices
- A man-in-the-middle attack happens when someone can sit in the middle of a communication between two entities and modify its content, without the parties noticing it.
  - Listening in on communications
    - eavesdropping
- You can protect using good encryption, so even if the attacker gets access to the content they can’t read it.
- In the case of Internet communications this means using HTTPS and verified key certificates.

### 3. Malicious code execution

- These attacks try to execute some code on the host to obtain a certain result.
- This includes all types of code injections.
- **XSS**, which means **cross-site scripting**
  - This attack happens on the client-side (typically a browser), by injecting in the DOM malicious JavaScript through some user input.
  - **Never trust user inputs! Expect the unexpected! Sanitize/Escape**
    - sanitize user inputs
    - escapae user inputs
    - sanitize ntml
    - XSS protection cheatsheet
    - XSS filter pkg
    - ex. xss in npm
    - modern frameworks
- **SQL injection**
  - which happens when a user tries to store some data on a SQL database which includes SQL commands.
    - Damage or delete data
    - Obtain data
    - Modify data
  - To defend from these attacks the core principle is to never trust user input. You need to always sanitize it, by removing any characters that your system can consider as code to execute.
  - Also you should only use external libraries coming from trusted sources.
- **Cross-site request forgery (CSRF)**
  - a client-side attack that happens when you visit a malicious website that is sending HTTP requests to a server where you previously logged in, taking advantage of the credentials stored in your browser’s cookies.
  - You can protect from CSRF using the SameSite attribute in the Set-Cookie response header.
  - 해결 방법
    - Synchroniser tokens
    - Set custom cookie headers
    - Modern browsers are taking action

### 4. Denial of service

- Aka **DoS** aims at taking a system down or making it unusable.
- It works by sending a very high number of requests to a server so that the system is overloaded and becomes unavailable or crashes.
- To defend from it you can increase the load-capability of your server, or use dedicated hardware or software that identifies the attacking IP addresses and blocks any requests from them.
  - Host your system to handle high loads of traffic
  - Use a service specialised in DoS protection
  - Whitelist/Blacklist IPs(ex. Fail2Ban)
- total defence doesn't exist...?

## HTTPS

- **Strict Transport Security**
- Is the **secure version of HTTP**.
- Is based on asymmetric encryption. Each party shares a public key with the other, which uses it to encrypt any messages to be sent back. Such messages then can only be decrypted with the private key that is kept by the owner who originally sent the public key.
- SSL certificates accompany public keys to confirm the identity of a sender, which is verified by a certificate authority.

[Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)
