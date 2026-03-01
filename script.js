/* =========================
           BOOT SEQUENCE - WINDOWS 95 STYLE
        ========================= */
        (function() {
            // Boot sequence lines exactly as specified
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
            
            // Get all boot line elements
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
            
            // Clear all boot lines initially
            for(let i = 0; i < bootLineElements.length; i++) {
                if(bootLineElements[i]) {
                    bootLineElements[i].textContent = "";
                }
            }
            
            function typeNextCharacter() {
                // If we've shown all lines, stop typing
                if (currentLineIndex >= bootLines.length) {
                    return;
                }
                
                const currentLine = bootLines[currentLineIndex];
                const currentElement = bootLineElements[currentLineIndex];
                
                if (!currentElement) return;
                
                // If it's an empty line, just add a blank line and move to next immediately
                if (currentLine === "") {
                    currentElement.textContent = " ";
                    currentLineIndex++;
                    currentCharIndex = 0;
                    setTimeout(typeNextCharacter, 300);
                    return;
                }
                
                // Type current line character by character
                if (currentCharIndex < currentLine.length) {
                    currentElement.textContent += currentLine[currentCharIndex];
                    currentCharIndex++;
                    
                    // Random typing speed (20-80ms) for authentic feel
                    const nextDelay = Math.random() * 60 + 20;
                    setTimeout(typeNextCharacter, nextDelay);
                } else {
                    // Move to next line
                    currentLineIndex++;
                    currentCharIndex = 0;
                    
                    // Update progress text based on what's been typed
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
            
            // Start typing after a short delay
            setTimeout(typeNextCharacter, 500);
            
            // Em vez de fade out, mostra tela de crash com interferência
            setTimeout(function() {
                // Aplica animação de crash no boot screen
                bootScreen.classList.add("boot-crash");
                
                // Mostra tela de crash
                crashScreen.style.display = "flex";
                
                // Remove boot screen após animação
                setTimeout(function() {
                    if (bootScreen && bootScreen.parentNode) {
                        bootScreen.style.display = "none";
                    }
                    
                    // CRIA UM GLITCH DE 1 SEGUNDO IMEDIATAMENTE APÓS A TELA DE CRASH
                    const body = document.body;
                    const staticOverlay = document.getElementById("staticOverlay");
                    
                    // Ativa glitch intenso por 1 segundo
                    body.classList.add('glitch-intense');
                    staticOverlay.classList.add('active');
                    
                    // Cria popup de erro
                    const errorMessages = [
                        "SYSTEM COMPROMISED • EXTERNAL OBSERVER DETECTED",
                        "UNAUTHORIZED ACCESS • TERMINATING SESSION",
                        "MEMORY CORRUPTION • VESSEL INTEGRITY COMPROMISED"
                    ];
                    
                    const errorDiv = document.createElement('div');
                    errorDiv.className = 'error-popup';
                    errorDiv.textContent = errorMessages[Math.floor(Math.random() * errorMessages.length)];
                    document.body.appendChild(errorDiv);
                    
                    // Remove o glitch após 1 segundo
                    setTimeout(function() {
                        body.classList.remove('glitch-intense');
                        staticOverlay.classList.remove('active');
                        if (errorDiv.parentNode) {
                            errorDiv.parentNode.removeChild(errorDiv);
                        }
                    }, 1000); // 1 segundo de duração
                    
                    // Remove a tela de crash após 1 segundo
                    setTimeout(function() {
                        if (crashScreen && crashScreen.parentNode) {
                            crashScreen.style.display = "none";
                        }
                        
                        // Inicia os glitches periódicos de 45 em 45 segundos
                        startPeriodicGlitches();
                    }, 1000);
                    
                }, 500);
            }, 15500);
            
            // BOOT SCREEN PERSISTENCE - Ensure it shows on every page load/refresh
            // This handles back/forward cache
            window.addEventListener('pageshow', function(event) {
                if (event.persisted) {
                    // Page was restored from bfcache, re-show boot screen
                    if (bootScreen) {
                        bootScreen.style.display = "flex";
                        bootScreen.classList.remove("boot-crash");
                        
                        // Reset boot lines
                        for(let i = 0; i < bootLineElements.length; i++) {
                            if(bootLineElements[i]) {
                                bootLineElements[i].textContent = "";
                            }
                        }
                        
                        // Reset typing variables
                        currentLineIndex = 0;
                        currentCharIndex = 0;
                        
                        // Restart typing
                        setTimeout(typeNextCharacter, 500);
                        
                        // Reset crash com glitch de 1 segundo
                        setTimeout(function() {
                            bootScreen.classList.add("boot-crash");
                            crashScreen.style.display = "flex";
                            setTimeout(function() {
                                if (bootScreen && bootScreen.parentNode) {
                                    bootScreen.style.display = "none";
                                }
                                
                                // Glitch de 1 segundo
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
                                
                                setTimeout(function() {
                                    body.classList.remove('glitch-intense');
                                    staticOverlay.classList.remove('active');
                                    if (errorDiv.parentNode) {
                                        errorDiv.parentNode.removeChild(errorDiv);
                                    }
                                }, 1000);
                                
                                setTimeout(function() {
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
    
    // ADDITIONAL ATMOSPHERIC TIMERS - SYSTEM AGE INDICATORS
    setTimeout(() => {
        appendLog("NODE_HEARTBEAT: IRREGULAR [LAST PING: 247 DAYS]");
    }, 120000);
    
    setTimeout(() => {
        const terminal = document.getElementById("lockTerminal");
        if(terminal) {
            const orphanLine = document.createElement("div");
            orphanLine.className = "log-entry";
            orphanLine.style.color = "#441111";
            orphanLine.innerHTML = "> WARNING: This terminal may be operating in orphaned mode";
            terminal.appendChild(orphanLine);
        }
    }, 135000);

});


/* =========================
   PAGE SYSTEM (GLOBAL)
========================= */
function showPage(pageId, element){

    document.querySelectorAll('.page').forEach(p=>{
        p.style.display='none';
    });

    const target=document.getElementById(pageId);
    if(target) target.style.display='block';

    document.querySelectorAll('nav a').forEach(a=>{
        a.classList.remove('active');
    });

    if(element) element.classList.add('active');

    // botão só no storage
    const btn=document.getElementById("archiveButton");
    if(btn){
        btn.style.display = (pageId==="p8") ? "block" : "none";
    }
}

/* =========================
   GLITCHES PERIÓDICOS - A CADA 45 SEGUNDOS
========================= */
function startPeriodicGlitches() {
    const body = document.body;
    const unauthorizedOverlay = document.getElementById("unauthorizedOverlay");
    const staticOverlay = document.getElementById("staticOverlay");
    
    // Função para glitch intenso
    function intenseGlitch() {
        body.classList.add('glitch-intense');
        staticOverlay.classList.add('active');
        
        // Create random error popup com mensagens mais perturbadoras
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
        
        // Remove error after 2 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 2000);
        
        // Remove glitch after short time
        setTimeout(() => {
            body.classList.remove('glitch-intense');
            staticOverlay.classList.remove('active');
        }, 300);
    }
    
    // Função para glitch normal
    function normalGlitch() {
        body.classList.add('glitch');
        staticOverlay.classList.add('active');
        
        // Create random error popup
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
        
        // Remove error after 1.5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 1500);
        
        // Remove glitch after short time
        setTimeout(() => {
            body.classList.remove('glitch');
            staticOverlay.classList.remove('active');
        }, 200);
    }
    
    // Função para unauthorized overlay
    function showUnauthorized() {
        body.classList.add('glitch-intense');
        staticOverlay.classList.add('active');
        
        // Show unauthorized overlay
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
    
    // Função para corromper texto aleatório
    function corruptRandomText() {
        const elements = document.querySelectorAll('.content-body p, .content-body li, .instance-log, .content-header h2, nav h1');
        if (elements.length > 0) {
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            if (randomElement && randomElement.textContent.length > 5) {
                // Temporarily add glitch effect
                randomElement.style.animation = 'textGlitchIntense 0.1s infinite';
                setTimeout(() => {
                    randomElement.style.animation = '';
                }, 800);
            }
        }
    }
    
    // Função para glitch em links do nav
    function glitchNavLinks() {
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
    
    // Configurar intervalos para cada tipo de glitch (45 segundos)
    
    // Glitch normal a cada 45 segundos
    setInterval(() => {
        normalGlitch();
    }, 45000);
    
    // Glitch intenso a cada 45 segundos (alternando com o normal)
    setInterval(() => {
        intenseGlitch();
    }, 45000);
    
    // Unauthorized overlay a cada 90 segundos (menos frequente)
    setInterval(() => {
        showUnauthorized();
    }, 90000);
    
    // Corrupção de texto a cada 45 segundos
    setInterval(() => {
        corruptRandomText();
    }, 45000);
    
    // Glitch em links do nav a cada 45 segundos
    setInterval(() => {
        glitchNavLinks();
    }, 45000);
    
    // Também adicionar os logs existentes
    setTimeout(() => {
        const lockTerminal = document.getElementById("lockTerminal");
        if(lockTerminal) {
            const anomalyLine = document.createElement("div");
            anomalyLine.className = "log-entry";
            anomalyLine.innerHTML = "> ANOMALOUS_BEHAVIOR_PATTERN: DETECTED";
            lockTerminal.appendChild(anomalyLine);
        }
    }, 90000);
    
    setTimeout(() => {
        const lockTerminal = document.getElementById("lockTerminal");
        if(lockTerminal) {
            const complianceLine = document.createElement("div");
            complianceLine.className = "log-entry";
            complianceLine.innerHTML = "> COMPLIANCE_PROBABILITY: RECALCULATING";
            lockTerminal.appendChild(complianceLine);
        }
    }, 105000);
    
    setTimeout(() => {
        const lockTerminal = document.getElementById("lockTerminal");
        if(lockTerminal) {
            const heartbeatLine = document.createElement("div");
            heartbeatLine.className = "log-entry";
            heartbeatLine.innerHTML = "> NODE_HEARTBEAT: IRREGULAR [LAST PING: 247 DAYS]";
            lockTerminal.appendChild(heartbeatLine);
        }
    }, 120000);
    
    setTimeout(() => {
        const lockTerminal = document.getElementById("lockTerminal");
        if(lockTerminal) {
            const orphanLine = document.createElement("div");
            orphanLine.className = "log-entry";
            orphanLine.style.color = "#441111";
            orphanLine.innerHTML = "> WARNING: This terminal may be operating in orphaned mode";
            lockTerminal.appendChild(orphanLine);
        }
    }, 135000);
    
    // Timestamp anomaly
    setTimeout(() => {
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            if(page.style.display !== 'none') {
                const ghostLine = document.createElement('div');
                ghostLine.className = 'instance-log';
                ghostLine.style.opacity = '0.3';
                ghostLine.style.fontSize = '0.7rem';
                ghostLine.innerHTML = '> [system timestamp anomaly]';
                if(page.querySelector('.content-body')) {
                    page.querySelector('.content-body').appendChild(ghostLine);
                }
            }
        });
    }, 45000);
}

/* =========================
   INIT
========================= */
document.addEventListener("DOMContentLoaded",()=>{

    const archiveButton=document.getElementById("archiveButton");
    const fakeLogin=document.getElementById("fakeLogin");
    const authBtn=document.getElementById("authNodeBtn");

    /* NODE MIRROR CLICK */
    if(archiveButton){
        archiveButton.addEventListener("click",()=>{
            showPage('p10');
            setTimeout(()=>{
                fakeLogin.style.display="block";
            },3000);
        });
    }

    /* LOGIN */
    if(authBtn){
        authBtn.addEventListener("click",()=>{

            const email=document.getElementById("nodeEmail").value.trim();
            const pass=document.getElementById("nodePassword").value.trim();
            const status=document.getElementById("loginStatus");

            const AUTH_EMAIL="archive.sigktor.00@system.com";
            const AUTH_PASS="3378047010209022";

            if(email===AUTH_EMAIL && pass===AUTH_PASS){

                status.innerText="NODE AUTHENTICATED...";

                setTimeout(()=>{
                    window.location.href = "archive.html";
                }, 1400);
            }else{
                status.innerText="ACCESS DENIED — Behavioral mismatch.";
            }
        });
    }
    
    // SYSTEM AGE INDICATOR ON LOAD
    console.log("NOC_TERMINAL: Legacy boot sequence complete. System time may be inaccurate.");

});
