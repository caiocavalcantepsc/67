(function () {
    const bootLines = [
        "LEGACY TERMINAL v2.3.17",
        "BOOT SEQUENCE INITIATED",
        "",
        "ARCHIVE NODE — OFFLINE",
        "ATTEMPTING LOCAL INDEX RECOVERY",
        "",
        "USER CREDENTIAL: UNKNOWN",
        "SESSION RECONSTRUCTION IN PROGRESS",
        "",
        "...",
        "MATCH FOUND"
    ];

    const bootLineElements = [
        document.getElementById("bootLine1"),
        document.getElementById("bootLine2"),
        document.getElementById("bootLine3"),
        document.getElementById("bootLine4"),
        document.getElementById("bootLine5"),
        document.getElementById("bootLine6"),
        document.getElementById("bootLine7"),
        document.getElementById("bootLine8"),
        document.getElementById("bootLine9"),
        document.getElementById("bootLine10"),
        document.getElementById("bootLine11")
    ];

    const progressText = document.getElementById("bootProgressText");
    const bootScreen = document.getElementById("bootScreen");
    const crashScreen = document.getElementById("crashScreen");

    let currentLineIndex = 0;
    let currentCharIndex = 0;

    for (let i = 0; i < bootLineElements.length; i++) {
        if (bootLineElements[i]) {
            bootLineElements[i].textContent = "";
        }
    }

    function typeNextCharacter() {
        if (currentLineIndex >= bootLines.length) {
            return;
        }

        const currentLine = bootLines[currentLineIndex];
        const currentElement = bootLineElements[currentLineIndex];

        if (!currentElement) return;

        if (currentLine === "") {
            currentElement.textContent = " ";
            currentLineIndex++;
            currentCharIndex = 0;
            setTimeout(typeNextCharacter, 300);
            return;
        }

        if (currentCharIndex < currentLine.length) {
            currentElement.textContent += currentLine[currentCharIndex];
            currentCharIndex++;

            const nextDelay = Math.random() * 60 + 20;
            setTimeout(typeNextCharacter, nextDelay);
        } else {
            currentLineIndex++;
            currentCharIndex = 0;

            if (currentLineIndex === 2) {
                progressText.textContent = "BIOS version check...";
            } else if (currentLineIndex === 5) {
                progressText.textContent = "Scanning for archive nodes...";
            } else if (currentLineIndex === 8) {
                progressText.textContent = "Reconstructing session data...";
            } else if (currentLineIndex === 10) {
                progressText.textContent = "Index match found. Finalizing...";
            }

            setTimeout(typeNextCharacter, 400);
        }
    }

    setTimeout(typeNextCharacter, 500);

    setTimeout(function () {
        bootScreen.classList.add("boot-crash");

        crashScreen.style.display = "flex";

        setTimeout(function () {
            if (bootScreen && bootScreen.parentNode) {
                bootScreen.style.display = "none";
            }

            const body = document.body;
            const staticOverlay = document.getElementById("staticOverlay");

            body.classList.add('glitch-intense');
            staticOverlay.classList.add('active');

            const errorMessages = [
                "SYSTEM COMPROMISED • EXTERNAL OBSERVER DETECTED",
                "UNAUTHORIZED ACCESS • TERMINATING SESSION",
                "MEMORY CORRUPTION • VESSEL INTEGRITY COMPROMISED"
            ];

            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-popup';
            errorDiv.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
            document.body.appendChild(errorDiv);

            setTimeout(function () {
                body.classList.remove('glitch-intense');
                staticOverlay.classList.remove('active');
                if (errorDiv.parentNode) {
                    errorDiv.parentNode.removeChild(errorDiv);
                }
            }, 1000);

            setTimeout(function () {
                if (crashScreen && crashScreen.parentNode) {
                    crashScreen.style.display = "none";
                }

                startPeriodicGlitches();
            }, 1000);

        }, 500);
    }, 15500);

    window.addEventListener('pageshow', function (event) {
        if (event.persisted) {
            if (bootScreen) {
                bootScreen.style.display = "flex";
                bootScreen.classList.remove("boot-crash");

                for (let i = 0; i < bootLineElements.length; i++) {
                    if (bootLineElements[i]) {
                        bootLineElements[i].textContent = "";
                    }
                }

                currentLineIndex = 0;
                currentCharIndex = 0;

                setTimeout(typeNextCharacter, 500);

                setTimeout(function () {
                    bootScreen.classList.add("boot-crash");
                    crashScreen.style.display = "flex";
                    setTimeout(function () {
                        if (bootScreen && bootScreen.parentNode) {
                            bootScreen.style.display = "none";
                        }

                        const body = document.body;
                        const staticOverlay = document.getElementById("staticOverlay");

                        body.classList.add('glitch-intense');
                        staticOverlay.classList.add('active');

                        const errorMessages = [
                            "SYSTEM COMPROMISED • EXTERNAL OBSERVER DETECTED",
                            "UNAUTHORIZED ACCESS • TERMINATING SESSION",
                            "MEMORY CORRUPTION • VESSEL INTEGRITY COMPROMISED"
                        ];

                        const errorDiv = document.createElement('div');
                        errorDiv.className = 'error-popup';
                        errorDiv.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
                        document.body.appendChild(errorDiv);

                        setTimeout(function () {
                            body.classList.remove('glitch-intense');
                            staticOverlay.classList.remove('active');
                            if (errorDiv.parentNode) {
                                errorDiv.parentNode.removeChild(errorDiv);
                            }
                        }, 1000);

                        setTimeout(function () {
                            if (crashScreen && crashScreen.parentNode) {
                                crashScreen.style.display = "none";
                            }
                            startPeriodicGlitches();
                        }, 1000);

                    }, 500);
                }, 15500);
            }
        }
    });
})();

document.addEventListener("DOMContentLoaded", function () {

    const archiveButton = document.getElementById("archiveButton");
    const driveLink = "https://drive.google.com/drive/folders/12VZW9sLDXMbWGmkNe08-kaEmmqnDerCZ?usp=drive_link";

    function appendLog(message) {
        const log = document.getElementById("lockTerminal");
        if (!log) return;

        const line = document.createElement("div");
        line.className = "log-entry";
        line.innerHTML = "> " + message;
        log.appendChild(line);
    }

    setTimeout(() => {
        appendLog("ANOMALOUS_BEHAVIOR_PATTERN: DETECTED");
    }, 90000);

    setTimeout(() => {
        appendLog("COMPLIANCE_PROBABILITY: RECALCULATING");
    }, 105000);

    setTimeout(() => {
        appendLog("NODE_HEARTBEAT: IRREGULAR [LAST PING: 247 DAYS]");
    }, 120000);

    setTimeout(() => {
        const terminal = document.getElementById("lockTerminal");
        if (terminal) {
            const orphanLine = document.createElement("div");
            orphanLine.className = "log-entry";
            orphanLine.style.color = "#441111";
            orphanLine.innerHTML = "> WARNING: This terminal may be operating in orphaned mode";
            terminal.appendChild(orphanLine);
        }
    }, 135000);

});

function showPage(pageId, element) {

    document.querySelectorAll('.page').forEach(p => {
        p.style.display = 'none';
    });

    const target = document.getElementById(pageId);
    if (target) target.style.display = 'block';

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('active');
    });

    if (element) element.classList.add('active');

    // botão só no storage
    const btn = document.getElementById("archiveButton");
    if (btn) {
        btn.style.display = (pageId === "p8") ? "block" : "none";
    }
}

function startPeriodicGlitches() {
    const body = document.body;
    const unauthorizedOverlay = document.getElementById("unauthorizedOverlay");
    const staticOverlay = document.getElementById("staticOverlay");

    let glitchCount = 0;
    const MAX_GLITCHES = 2; 

    function intenseGlitch() {
        if (glitchCount >= MAX_GLITCHES) return; 

        glitchCount++;
        console.log(`Glitch ${glitchCount} de ${MAX_GLITCHES}`);

        body.classList.add('glitch-intense');
        staticOverlay.classList.add('active');

        const errorMessages = [
            "SYSTEM COMPROMISED • EXTERNAL OBSERVER DETECTED",
            "UNAUTHORIZED ACCESS • TERMINATING SESSION",
            "MEMORY CORRUPTION • VESSEL INTEGRITY COMPROMISED",
            "KERNEL PANIC • UNAUTHORIZED ACCESS DETECTED",
            "BEHAVIORAL PATTERN • DEVIATION • LOGGING",
            "WARNING: YOU ARE BEING WATCHED",
            "SESSION TRACE • LOCATION RECORDED",
            "FOREIGN ACCESS • INITIATING COUNTERMEASURES",
            "CLASSIFIED MATERIAL • ACCESS LOGGED",
            "TERMINAL COMPROMISED • EXTERNAL ENTITY DETECTED",
            "THEY KNOW YOU ARE HERE",
            "YOUR PRESENCE HAS BEEN RECORDED"
        ];

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-popup';
        errorDiv.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 2000);

        setTimeout(() => {
            body.classList.remove('glitch-intense');
            staticOverlay.classList.remove('active');
        }, 300);
    }

    function normalGlitch() {
        if (glitchCount >= MAX_GLITCHES) return; 

        glitchCount++;

        body.classList.add('glitch');
        staticOverlay.classList.add('active');

        const errorMessages = [
            "SEGMENTATION FAULT • CORE DUMP",
            "UNAUTHORIZED ACCESS • LOGGING SESSION",
            "MEMORY CORRUPTION AT 0x7F34B2",
            "KERNEL PANIC • SYSTEM COMPROMISED",
            "BEHAVIORAL PATTERN DEVIATION DETECTED",
            "WARNING: EXTERNAL OBSERVER",
            "SESSION TRACE DETECTED • LOGGING",
            "FOREIGN ACCESS • RECORDING BEHAVIOR"
        ];

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-popup';
        errorDiv.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
        document.body.appendChild(errorDiv);

        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 1500);

        setTimeout(() => {
            body.classList.remove('glitch');
            staticOverlay.classList.remove('active');
        }, 200);
    }

    function showUnauthorized() {
        if (glitchCount >= MAX_GLITCHES) return;

        glitchCount++;
        console.log(`Glitch ${glitchCount} de ${MAX_GLITCHES} (Unauthorized)`);

        body.classList.add('glitch-intense');
        staticOverlay.classList.add('active');

        if (unauthorizedOverlay) {
            unauthorizedOverlay.style.display = 'flex';
        }

        setTimeout(() => {
            body.classList.remove('glitch-intense');
            staticOverlay.classList.remove('active');
            if (unauthorizedOverlay) {
                unauthorizedOverlay.style.display = 'none';
            }
        }, 2000);
    }

    function corruptRandomText() {
        if (glitchCount >= MAX_GLITCHES) return; 

        const elements = document.querySelectorAll('.content-body p, .content-body li, .instance-log, .content-header h2, nav h1');
        if (elements.length > 0) {
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            if (randomElement && randomElement.textContent.length > 5) {
                randomElement.style.animation = 'textGlitchIntense 0.1s infinite';
                setTimeout(() => {
                    randomElement.style.animation = '';
                }, 800);
            }
        }
    }

    function glitchNavLinks() {
        if (glitchCount >= MAX_GLITCHES) return; 

        const navLinks = document.querySelectorAll('nav ul li a');
        if (navLinks.length > 0) {
            const randomLink = navLinks[Math.floor(Math.random() * navLinks.length)];
            randomLink.style.color = '#00FF00';
            randomLink.style.borderColor = '#00FF00';
            setTimeout(() => {
                randomLink.style.color = '';
                randomLink.style.borderColor = '';
            }, 200);
        }
    }

    setTimeout(() => {
        if (glitchCount < MAX_GLITCHES) {
            const random = Math.random();
            if (random < 0.3) {
                intenseGlitch();
            } else if (random < 0.6) {
                normalGlitch();
            } else if (random < 0.8) {
                showUnauthorized();
            } else {
                corruptRandomText();
                glitchNavLinks();
            }
        }
    }, 10000);

    setTimeout(() => {
        if (glitchCount < MAX_GLITCHES) {
            const random = Math.random();
            if (random < 0.3) {
                intenseGlitch();
            } else if (random < 0.6) {
                normalGlitch();
            } else if (random < 0.8) {
                showUnauthorized();
            } else {
                corruptRandomText();
                glitchNavLinks();
            }
        }

        setTimeout(() => {
            console.log("Todos os glitches foram executados. Sistema estabilizado.");
        }, 1000);
    }, 30000);

    setTimeout(() => {
        const lockTerminal = document.getElementById("lockTerminal");
        if (lockTerminal) {
            const anomalyLine = document.createElement("div");
            anomalyLine.className = "log-entry";
            anomalyLine.innerHTML = "> ANOMALOUS_BEHAVIOR_PATTERN: DETECTED";
            lockTerminal.appendChild(anomalyLine);
        }
    }, 90000);

    setTimeout(() => {
        const lockTerminal = document.getElementById("lockTerminal");
        if (lockTerminal) {
            const complianceLine = document.createElement("div");
            complianceLine.className = "log-entry";
            complianceLine.innerHTML = "> COMPLIANCE_PROBABILITY: RECALCULATING";
            lockTerminal.appendChild(complianceLine);
        }
    }, 105000);

    setTimeout(() => {
        const lockTerminal = document.getElementById("lockTerminal");
        if (lockTerminal) {
            const heartbeatLine = document.createElement("div");
            heartbeatLine.className = "log-entry";
            heartbeatLine.innerHTML = "> NODE_HEARTBEAT: IRREGULAR [LAST PING: 247 DAYS]";
            lockTerminal.appendChild(heartbeatLine);
        }
    }, 120000);

    setTimeout(() => {
        const lockTerminal = document.getElementById("lockTerminal");
        if (lockTerminal) {
            const orphanLine = document.createElement("div");
            orphanLine.className = "log-entry";
            orphanLine.style.color = "#441111";
            orphanLine.innerHTML = "> WARNING: This terminal may be operating in orphaned mode";
            lockTerminal.appendChild(orphanLine);
        }
    }, 135000);

    setTimeout(() => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if (page.style.display !== 'none') {
                const ghostLine = document.createElement('div');
                ghostLine.className = 'instance-log';
                ghostLine.style.opacity = '0.3';
                ghostLine.style.fontSize = '0.7rem';
                ghostLine.innerHTML = '> [system timestamp anomaly]';
                if (page.querySelector('.content-body')) {
                    page.querySelector('.content-body').appendChild(ghostLine);
                }
            }
        });
    }, 45000);
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded", () => {

    const archiveButton = document.getElementById("archiveButton");
    const fakeLogin = document.getElementById("fakeLogin");
    const authBtn = document.getElementById("authNodeBtn");

    /* NODE MIRROR CLICK */
    if (archiveButton) {
        archiveButton.addEventListener("click", () => {
            showPage('p10');
            setTimeout(() => {
                fakeLogin.style.display = "block";
            }, 3000);
        });
    }

    /* LOGIN */
    if (authBtn) {
        authBtn.addEventListener("click", () => {

            const email = document.getElementById("nodeEmail").value.trim();
            const pass = document.getElementById("nodePassword").value.trim();
            const status = document.getElementById("loginStatus");

            const AUTH_EMAIL = "archive.sigktor.00@system.com";
            const AUTH_PASS = "3378047010209022";

            if (email === AUTH_EMAIL && pass === AUTH_PASS) {

                status.innerText = "NODE AUTHENTICATED...";

                setTimeout(() => {
                    window.location.href = "archive.html";
                }, 1400);
            } else {
                status.innerText = "ACCESS DENIED — Behavioral mismatch.";
            }
        });
    }
});
