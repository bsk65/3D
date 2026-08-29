// js/i18n.js — Nøglebaseret DA/EN-oversættelse af hele appen.
// Statisk HTML oversættes via data-i18n/data-i18n-placeholder + applyI18n().
// Dynamisk JS-bygget tekst (round.js, results.js, courses.js, analyse.js, m.fl.)
// kalder t(key,params) direkte, da data-i18n ikke overlever en efterfølgende
// textContent/innerHTML-overskrivning.
// Nyt sprog senere = ny nøgle i `translations` — ingen strukturændring.

const STORAGE_KEY = 'archery_lang'

export const translations = {
  da: {
    nav: { scoring:'POINT', results:'RESULTATER', analyse:'ANALYSE', courses:'BANER', friends:'VENNER' },
    common: {
      cancel:'Annuller', confirm:'Bekræft', save:'Gem', add:'Tilføj', errorPrefix:'Fejl: ',
      linkCopied:'Link kopieret', unknown:'Ukendt',
      gender: { herre:'Herre', dame:'Dame' },
      bowClass: { langbue:'Langbue', trad:'Traditionel', recurve:'Recurve (olympisk)', compound:'Compound',
        barbue:'Barbue', buejaeger:'Buejæger', tradBuejaeger:'Traditionel buejæger', rytterbue:'Rytterbue' },
      bowClassShort: { langbue:'Langbue', trad:'Traditionel', recurve:'Recurve', compound:'Compound',
        barbue:'Barbue', buejaeger:'Buejæger', tradBuejaeger:'Trad. buejæger', rytterbue:'Rytterbue' }
    },
    setup: {
      newRoundTitle:'🌲 Ny Runde', roundName:'Rundenavn', roundNameDefault:'Min Skydning',
      courseLabel:'Bane (valgfri)', noCourse:'-- Ingen bane --',
      targetCountLabel:'Antal mål', targets24:'24 Mål', targets30:'30 Mål', other:'Andet...',
      targetsUnit:'{n} mål',
      targetCountPlaceholder:'Antal mål', rulesetLabel:'Forbund', rulesetDgs1:'DGS (1 pil)', rulesetDgs2:'DGS (2 pile)',
      participantsTitle:'👥 Deltagere', searchFriend:'Søg ven...', addGuest:'+ Tilføj gæst',
      warningTitle:'🔴 Advarsel', enableWarning:'Aktiver advarsel',
      warnThreshPre:'Rød prik hvis gns. under', warnThreshPost:'point/pil',
      gpsTitle:'📍 GPS', startTarget:'Startmål',
      autoFindTitle:'Auto-find nærmeste mål', autoFindSub:'Brug GPS automatisk',
      trackRouteTitle:'Spor rute og tid', trackRouteSub:'Registrer rute og afstand',
      showDistancesTitle:'Vis afstande på mål', showDistancesSub:'Kun visning — ikke redigering',
      startRoundBtn:'START RUNDE →'
    },
    active: {
      targetPrefix:'MÅL ', ofN:' af {n}', targetFallback:'Mål {n}',
      statAvg:'GNS.', statPoint:'POINT', statRemaining:'Tilbage', statRemainingSub:'mål',
      editTitle:'Rediger mål', editNamePlaceholder:'Navn på dyr',
      takePhoto:'📷 Tag billede', saveGps:'📍 Gem GPS', save:'Gem', cancel:'Annuller',
      back:'← TILBAGE', next:'NÆSTE →', finish:'AFSLUT →', skip:'⤵ SPRING',
      finishNow:'✓ AFSLUT NU', finishConfirm:'✓ BEKRÆFT',
      abort:'🗑 AFBRYD', abortConfirm:'🗑 BEKRÆFT', editBtn:'✏️ RET',
      runde:'RUNDE', snt:'SNT', pilLabel:'🎯 PIL {n}', arrowShort1:'P1', arrowShort2:'P2',
      distanceLabel:'{m} m',
      targetAvg:'Gns. dette mål: {v}',
      resumeConfirm:'Genoptag den igangværende runde?',
      networkError:'Runde gemt lokalt (netværksfejl)',
      shareError:'Kunne ikke dele runde med medskytte',
      notSavedLocally:'Runden er ikke gemt lokalt',
      gpsSaved:'GPS gemt!', gpsError:'GPS fejl: {msg}'
    },
    results: {
      title:'Mine runder', import:'⬆ Importér', empty:'Ingen runder endnu',
      roundFallback:'Runde', targetsUnit:'{n} mål', deleteConfirm:'Slet?',
      pointWord:'point', tableTargetHeader:'Mål', totalLabel:'Total',
      distArrow1:'Snit pil 1', distArrow2:'Snit pil 2', overallAvg:'Samlet snit',
      summaryArrow1:'SNIT PIL 1', summaryArrow2:'SNIT PIL 2',
      summaryPoints:'POINT', summaryArrows:'PILE', summaryAvgPerArrow:'SNT/PIL',
      actualTitle:'Kun skudte mål', actualSub:'{shot} af {total} mål',
      actualAvgPerArrow:'SNT/PIL', actualAvgPerTarget:'SNT/MÅL',
      popupDistance:'DISTANCE', popupTime:'TID',
      sendResultsBtn:'📧 Send resultater', doneBtn:'Afslut',
      noRoundToSend:'Ingen runde at sende'
    },
    email: {
      header:'3D Bueskydning - Resultater', subjectPrefix:'3D Bueskydning - ',
      dateLabel:'Dato: ', courseLabel:'Bane: ', resultsHeader:'--- RESULTATER ---',
      pointWord:' point', detailHeader:'--- DETALJERET ---', targetLabel:'  Mål ',
      totalLabel:'  Total: ', arrow1Label:'Snit pil 1', arrow2Label:'Snit pil 2',
      overallAvgLabel:'Samlet snit', distributionLabel:'  Fordeling: ',
      seeInApp:'Se resultater i appen:', loginRequired:'(Kræver login med din bruger)'
    },
    auth: {
      loginTab:'Log ind', signupTab:'Opret konto',
      emailPlaceholder:'Email', passwordPlaceholder:'Kodeord',
      loginBtn:'LOG IND', forgotPassword:'Glemt kodeord?',
      namePlaceholder:'Navn', signupPasswordPlaceholder:'Kodeord (min. 6 tegn)',
      selectGender:'Vælg køn', selectBowClass:'Vælg bueklasse',
      signupBtn:'OPRET KONTO',
      errUserNotFound:'Bruger ikke fundet.', errWrongPassword:'Forkert kodeord.',
      errInvalidCredential:'Ugyldig email eller kodeord.', errEmailInUse:'Email er allerede i brug.',
      errWeakPassword:'Kodeordet er for svagt (min. 6 tegn).', errInvalidEmail:'Ugyldig email-adresse.',
      errTooManyRequests:'For mange forsøg. Prøv igen senere.',
      errNetwork:'Netværksfejl. Tjek din forbindelse.',
      errGeneric:'Der opstod en fejl. Prøv igen.', errFillAllFields:'Udfyld alle felter.',
      errPasswordTooShort:'Adgangskoden skal være mindst 6 tegn.',
      errEnterEmailFirst:'Indtast din email først.', resetEmailSent:'Nulstillingsmail sendt!'
    },
    roundImport: {
      importedToast:'Runde importeret: {name}', importError:'Fejl ved import: {msg}',
      noFileSelected:'Ingen fil valgt', loginFirst:'Log ind først',
      noPlayersInFile:'Filen indeholder ingen spillere med resultater',
      readError:'Kunne ikke læse filen: {msg}',
      guestFallback:'Gæst {n}', importedRoundFallback:'Importeret runde'
    },
    modals: {
      profil: {
        title:'Fuldfør din profil',
        desc:'Vælg køn og bueklasse for at aktivere sammenligning med andre skytter.',
        laterBtn:'Senere', validationMsg:'Vælg både køn og bueklasse.',
        saveError:'Fejl ved gem. Prøv igen.'
      },
      qr: { closeBtn:'Luk' },
      skip: { title:'Hop til mål', placeholder:'Målnummer', goBtn:'Hop' },
      guest: { title:'Tilføj gæst', placeholder:'Gæstens navn', addBtn:'Tilføj' },
      importPlayer: { title:'Hvem er du?' }
    },
    banners: {
      pwa: { text:'Installer 3D Bueskydning på din hjemmeskærm for hurtig adgang', installBtn:'INSTALLER APP' },
      iosInstall: {
        line1:'Installer 3D Bueskydning på din hjemmeskærm:',
        shareStepPre:'Tryk på ', shareStepPost:' Del-ikonet nederst i Safari, og vælg "Føj til hjemmeskærm".'
      },
      push: {
        text:'Få besked med det samme når nogen inviterer dig til en skydning – også når appen er lukket.',
        enableBtn:'AKTIVÉR NOTIFIKATIONER', enabledToast:'Notifikationer aktiveret'
      }
    },
    push: {
      permissionError:'Kunne ikke bede om tilladelse: {msg}',
      blocked:'Notifikationer blokeret i browseren — skal ændres i browserens side-indstillinger',
      unsupported:'Push-notifikationer understøttes ikke i denne browser',
      swError:'Kunne ikke registrere service worker', tokenError:'Kunne ikke hente push-token',
      genericError:'Push-fejl: {msg}', newMessageFallback:'Ny besked'
    },
    friends: {
      title:'Venner', addFriendBtn:'+ Tilføj ven',
      requestAccessBtn:'🔎 Må jeg kigge med?', statusPending:'Afventer',
      cancelRequestTitle:'Fortryd anmodning', statusApproved:'Kan se resultater ✅',
      statusRejected:'Afvist', retryBtn:'Prøv igen', empty:'Ingen venner endnu',
      editTitle:'Rediger ven', addTitle:'Tilføj ven', deleteConfirm:'Slet {name}?',
      namePlaceholder:'Navn', phonePlaceholder:'Telefon', clubPlaceholder:'Klub',
      bowTypeDefault:'Buetype...', bowTypeRecurve:'Recurve', bowTypeCompound:'Compound',
      bowTypeLongbow:'Longbow', bowTypeBarebow:'Barebow'
    },
    admin: {
      loading:'Henter admins…', empty:'Ingen admins fundet',
      currentAdminsTitle:'NUVÆRENDE ADMINISTRATORER', youTag:'(dig)', removeBtn:'Fjern',
      period7:'Sidste 7 dage', period30:'Sidste 30 dage', period365:'Sidste 365 dage',
      loadingStats:'Henter…', totalRegistered:'I alt registreret',
      userNotFound:'Bruger ikke fundet', nowAdmin:'{name} er nu admin',
      removeConfirm:'Fjern {email} som administrator?', removedAdmin:'{email} er fjernet som admin',
      title:'Administrator', addAdminPlaceholder:'Email til ny admin',
      usageTitle:'BRUG AF APPEN', updateBtn:'Opdater',
      statsHint:'Klik "Opdater" for at hente statistik', allUsersTitle:'ALLE BRUGERE',
      searchUserPlaceholder:'Søg navn eller email…', usersCount:'{n} brugere'
    },
    meetups: {
      header:'Skal vi skyde sammen?', sectionSuggestBtn:'+ Foreslå',
      statusPending:'Afventer', statusAccepted:'Tilmeldt ✅',
      statusProposing:'Foreslår andet tidspunkt 🕓', statusDeclined:'Afbud ❌',
      empty:'Ingen planlagte skydninger endnu',
      joinBtn:'Tilmeld', proposeOtherBtn:'Foreslå andet tidspunkt', declineBtn:'Afbud',
      acceptProposalBtn:'Accepter {date} {time} ({name})', editTimeBtn:'Rediger tidspunkt',
      cancelMeetupBtn:'Aflys', deleteBtn:'Slet',
      cancelledBanner:'❌ Aflyst', notInvitedBanner:'👁 Du er ikke inviteret — vises kun for superadmin',
      dateTimeLine:'{date} kl. {time}', createdBy:'Oprettet af {name}',
      commentPlaceholder:'Skriv en kommentar…', sendBtn:'Send',
      noCoursesToast:'Ingen baner tilgængelige',
      noFriendsYet:'Du har ingen venner endnu', noOtherUsers:'Ingen andre registrerede brugere',
      notRegisteredNote:'ikke registreret i appen', noRecipientsSelected:'Ingen modtagere valgt endnu',
      selectCourseToast:'Vælg en bane', selectDateTimeToast:'Vælg dato og tid',
      selectRecipientToast:'Vælg mindst én modtager',
      invalidNamesToast:'{names} er ikke registreret i appen og blev ikke inviteret',
      proposalSentToast:'Forslag sendt', newTimeAcceptedToast:'Nyt tidspunkt accepteret',
      timeUpdatedToast:'Tidspunkt opdateret',
      cancelConfirm:'Aflys denne skydning?',
      deleteConfirm:'Slet denne skydning permanent? Det kan ikke fortrydes.',
      modalTitle:'Foreslå fælles skydning', proposeAnotherTitle:'Foreslå andet tidspunkt',
      editTimeTitle:'Rediger tidspunkt',
      courseLabel:'Bane', selectCoursePlaceholder:'-- Vælg bane --',
      dateLabel:'Dato', timeLabel:'Tidspunkt',
      noteLabel:'Bemærkning (valgfrit)', notePlaceholder:'Skriv en bemærkning om skydningen…',
      myFriendsTab:'Mine venner', allRegisteredTab:'Alle registrerede',
      selectAllBtn:'Vælg alle', sendProposalBtn:'Send forslag'
    },
    sharing: {
      title:'Må jeg kigge med?',
      emptyState:'Anmod om at se en vens resultater ved at trykke "🔎 Må jeg kigge med?" på personen i din venneliste ovenfor.',
      incomingRequestsTitle:'Anmodninger om at se dine resultater',
      acceptBtn:'Accepter', rejectBtn:'Afvis',
      sharingWithTitle:'Du deler resultater med', stopSharingBtn:'Afslut deling',
      viewableTitle:'Du kan se resultater for', viewInAnalyseBtn:'Se i Analyse',
      ownRequestError:'Du kan ikke anmode om at se dine egne resultater',
      notRegisteredError:'{name} er ikke registreret i appen',
      requestSentToast:'Anmodning sendt', acceptedToast:'Deling accepteret',
      rejectConfirm:'Afvis denne anmodning?',
      stopConfirm:'Afslut denne deling? Personen mister med det samme adgang til dine resultater.',
      stoppedToast:'Deling afsluttet'
    },
    courses: {
      title:'Baner', createBtn:'+ Opret bane', backBtn:'← Tilbage',
      mapTab:'Kort', visitsTab:'Besøg', editTab:'Rediger',
      showMyPosition:'📍 Vis min position', deleteCourseBtn:'🗑 Slet bane',
      createModalTitle:'Opret bane', namePlaceholder:'Banenavn', searchPlaceholder:'Søg bane...',
      targets24:'24 mål', targets30:'30 mål',
      locationPlaceholder:'Lokation (fx by)',
      visibilityPublic:'Offentlig', visibilityPrivate:'Privat', visibilityHidden:'Skjult (kun godkendte)',
      visibilityHint:'Privat: banen er stadig synlig for alle, men vises med "(Banen er kun for medlemmer)". Skjult: kun skytter du selv godkender (nedenfor) kan se banen.',
      membersOnlySuffix:'(Banen er kun for medlemmer)',
      searchUserPlaceholder:'Søg registreret bruger…', manualEmailPlaceholder:'…eller indtast email direkte',
      createBtnModal:'Opret',
      empty:'Ingen baner endnu', targetNameFallback:'Mål', emptyVisits:'Ingen besøg endnu',
      viewResultTitle:'Se resultat',
      infoTitle:'Baneinfo', nameLabel:'Banenavn', locationLabel:'Lokation', visibilityLabel:'Synlighed',
      saveInfoBtn:'Gem baneinfo', targetsHeader:'Mål ({n})', targetTitle:'Mål {n}', setGpsTitle:'Sæt GPS',
      nameLabelTarget:'Navn', emojiLabel:'Emoji', distanceLabel:'Afstand (m)',
      gpsInfo:'📍 GPS: {coords}', gpsMissing:'Ingen GPS',
      uploadPhotoBtn:'📷 Upload foto', saveAllTargetsBtn:'💾 Gem alle mål',
      noApprovedYet:'Ingen godkendt endnu',
      savedToast:'Gemt!', targetAddedToast:'Mål {n} tilføjet!', deleteTargetConfirm:'Slet mål {n}?',
      deleteTargetError:'Fejl: Kunne ikke slette mål', gpsSetToast:'GPS sat for mål {n}!',
      gpsErrorToast:'GPS fejl: {msg}', photoSavedToast:'Foto gemt!', uploadErrorToast:'Upload fejl: {msg}',
      allTargetsSavedToast:'Alle mål gemt!', gpsUnavailableToast:'GPS ikke tilgængeligt',
      deleteCourseConfirm:'Slet banen "{name}"?', courseDeletedToast:'Bane slettet',
      deleteCourseError:'Fejl: Kunne ikke slette bane', courseCreatedToast:'Bane oprettet!',
      createCourseError:'Fejl: Kunne ikke oprette bane'
    },
    analyse: {
      title:'Analyse', myselfOption:'Mig selv',
      filterAll:'Alle runder', filterLatest:'Seneste runde', filterLast10:'Seneste 10',
      filterLast20:'Seneste 20', filterSpecific:'Specifik runde', filterCompare:'Sammenlign runder',
      allCourses:'Alle baner', allRulesets:'Alle forbund', numRoundsPlaceholder:'Antal runder',
      onlyCompletedLabel:'Kun gennemførte runder (alle mål skudt)',
      onlyStartedAt1Label:'Kun runder startet ved mål 1',
      round1Label:'RUNDE 1', round2Label:'RUNDE 2',
      selectRoundPlaceholder:'Vælg runde...', selectRound2Placeholder:'Vælg runde 2...',
      arrow1:'PIL 1', arrow2:'PIL 2',
      singleArrowNote:'{ruleset} skydes med 1 pil pr. mål — PIL 1/PIL 2 er derfor ikke relevant',
      singleArrowNoteCompare:'{ruleset} skydes med 1 pil pr. mål — PIL 1/PIL 2-sammenligning er derfor ikke relevant',
      notRelevant:'Ikke relevant', best:'BEDSTE', worst:'SVÆRESTE',
      comparisonTitle:'SAMMENLIGNING', vs:'VS',
      wonBy:'{name} vandt med {diff} point', tie:'Uafgjort!',
      arrowStatsTitle:'PIL STATISTIK', bestWorstTargetTitle:'BEDSTE OG SVÆRESTE MÅL',
      zoneDistTitle:'FORDELING PR. SCOREZONE',
      selectTwoRounds:'Vælg to runder ovenfor', roundsNotFound:'Kunne ikke finde runderne',
      meFallback:'Mig', viewingResultsFor:'Viser resultater for {name}',
      statRounds:'RUNDER', statAvgPerRound:'SNIT/RUNDE', statBest:'BEDSTE', statLowest:'LAVESTE',
      roundsIncludedTitle:'RUNDER I DENNE ANALYSE ({n})',
      selectRulesetNote:'Vælg et specifikt forbund i filteret ovenfor for at se pil-fordeling (runderne i dette udvalg bruger forskellige regelsæt)',
      bestWithArrow1:'Bedst med PIL 1 🏹', bestWithArrow2:'Bedst med PIL 2 🏹',
      bothArrowsEqual:'Begge pile er lige gode 🎯', shotOrdinal:'Skud nr. {n}',
      developmentTitle:'UDVIKLING (RUNDER)', oldest:'ældst', newest:'nyest',
      perTargetGraphTitle:'GENNEMSNIT PR. SKUDRÆKKEFØLGE',
      perTargetCaption:'Skudrækkefølge — 1 = første mål skudt · stiplet linje = trend',
      consistencyTitle:'KONSISTENS (SPREDNING)',
      consistencyNote:'Standardafvigelse i point (samme skala som scoren, 0-11) — ikke et 0-1-tal. Tæt på 0 = meget ensartet gennem runden; jo højere tal, jo større udsving mellem de bedste og sværeste mål.',
      fullscreenGraphTitle:'GENNEMSNIT PR. SKUDRÆKKEFØLGE · knib for zoom · dobbelttryk for reset',
      consistencyOverTimeTitle:'KONSISTENS OVER TID · denne bane',
      consistencyOverTimeCaption:'Spredning pr. runde (samme point-skala som ovenfor) — faldende kurve = mere ensartet skydning over tid',
      comparisonSectionTitle:'SAMMENLIGNING · {gender} {bowClass}', loadingComparison:'Henter...',
      noOtherShootersYet:'Ingen andre {gender} {bowClass}-skytter har skudt denne bane endnu.',
      yourAvgPerArrow:'DIT SNT/PIL', difference:'DIFFERENCE', othersAvgPerArrow:'ANDRES SNT/PIL',
      basedOnRoundsSingular:'Baseret på {n} runde fra andre skytter',
      basedOnRoundsPlural:'Baseret på {n} runder fra andre skytter',
      distanceInsightsTitle:'AFSTANDS-ANALYSE',
      distanceInsightsSubtitle:'Andel skud der rammer {label} pr. afstandsgruppe',
      distanceInsightsCoverage:'Baseret på {used} af {total} runder — kun runder spillet på baner med kendte mål-afstande tæller med',
      distBucket0to10:'0-10 m', distBucket10to20:'10-20 m', distBucket20to30:'20-30 m',
      killZoneLabel:'kill-zonen',
      trendUp:'📈 Din score er steget {pct}% de seneste {weeks} uger',
      trendDown:'📉 Din score er faldet {pct}% de seneste {weeks} uger',
      trendFlat:'Din score har ligget stabilt de seneste {weeks} uger',
      trendNotEnoughData:'Ikke nok runder de seneste {weeks} uger til at vise en udvikling endnu',
      weakestZone:'Din største svaghed er mål på {range}',
      pointPotential:'Hvis din træfprocent på {range} kom op på dit snit, svarer det til ca. +{n} point pr. runde'
    }
  },
  en: {
    nav: { scoring:'SCORING', results:'RESULTS', analyse:'ANALYSIS', courses:'COURSES', friends:'FRIENDS' },
    common: {
      cancel:'Cancel', confirm:'Confirm', save:'Save', add:'Add', errorPrefix:'Error: ',
      linkCopied:'Link copied', unknown:'Unknown',
      gender: { herre:'Male', dame:'Female' },
      bowClass: { langbue:'Longbow', trad:'Traditional', recurve:'Recurve (Olympic)', compound:'Compound',
        barbue:'Barebow', buejaeger:'Bowhunter', tradBuejaeger:'Traditional bowhunter', rytterbue:'Horsebow' },
      bowClassShort: { langbue:'Longbow', trad:'Traditional', recurve:'Recurve', compound:'Compound',
        barbue:'Barebow', buejaeger:'Bowhunter', tradBuejaeger:'Trad. bowhunter', rytterbue:'Horsebow' }
    },
    setup: {
      newRoundTitle:'🌲 New Round', roundName:'Round name', roundNameDefault:'My Shoot',
      courseLabel:'Course (optional)', noCourse:'-- No course --',
      targetCountLabel:'Number of targets', targets24:'24 Targets', targets30:'30 Targets', other:'Other...',
      targetsUnit:'{n} targets',
      targetCountPlaceholder:'Number of targets', rulesetLabel:'Ruleset', rulesetDgs1:'DGS (1 arrow)', rulesetDgs2:'DGS (2 arrows)',
      participantsTitle:'👥 Participants', searchFriend:'Search friend...', addGuest:'+ Add guest',
      warningTitle:'🔴 Warning', enableWarning:'Enable warning',
      warnThreshPre:'Red dot if avg. below', warnThreshPost:'points/arrow',
      gpsTitle:'📍 GPS', startTarget:'Start target',
      autoFindTitle:'Auto-find nearest target', autoFindSub:'Use GPS automatically',
      trackRouteTitle:'Track route and time', trackRouteSub:'Record route and distance',
      showDistancesTitle:'Show target distances', showDistancesSub:'View only — not editable',
      startRoundBtn:'START ROUND →'
    },
    active: {
      targetPrefix:'TARGET ', ofN:' of {n}', targetFallback:'Target {n}',
      statAvg:'AVG.', statPoint:'POINTS', statRemaining:'Remaining', statRemainingSub:'targets',
      editTitle:'Edit target', editNamePlaceholder:'Animal name',
      takePhoto:'📷 Take photo', saveGps:'📍 Save GPS', save:'Save', cancel:'Cancel',
      back:'← BACK', next:'NEXT →', finish:'FINISH →', skip:'⤵ SKIP',
      finishNow:'✓ FINISH NOW', finishConfirm:'✓ CONFIRM',
      abort:'🗑 ABORT', abortConfirm:'🗑 CONFIRM', editBtn:'✏️ EDIT',
      runde:'ROUND', snt:'AVG', pilLabel:'🎯 ARROW {n}', arrowShort1:'A1', arrowShort2:'A2',
      distanceLabel:'{m} m',
      targetAvg:'Avg. this target: {v}',
      resumeConfirm:'Resume the round in progress?',
      networkError:'Round saved locally (network error)',
      shareError:'Could not share round with co-shooter',
      notSavedLocally:'The round is not saved locally',
      gpsSaved:'GPS saved!', gpsError:'GPS error: {msg}'
    },
    results: {
      title:'My rounds', import:'⬆ Import', empty:'No rounds yet',
      roundFallback:'Round', targetsUnit:'{n} targets', deleteConfirm:'Delete?',
      pointWord:'points', tableTargetHeader:'Target', totalLabel:'Total',
      distArrow1:'Avg. arrow 1', distArrow2:'Avg. arrow 2', overallAvg:'Overall avg.',
      summaryArrow1:'AVG ARROW 1', summaryArrow2:'AVG ARROW 2',
      summaryPoints:'POINTS', summaryArrows:'ARROWS', summaryAvgPerArrow:'AVG/ARROW',
      actualTitle:'Targets shot only', actualSub:'{shot} of {total} targets',
      actualAvgPerArrow:'AVG/ARROW', actualAvgPerTarget:'AVG/TARGET',
      popupDistance:'DISTANCE', popupTime:'TIME',
      sendResultsBtn:'📧 Send results', doneBtn:'Done',
      noRoundToSend:'No round to send'
    },
    email: {
      header:'3D Archery - Results', subjectPrefix:'3D Archery - ',
      dateLabel:'Date: ', courseLabel:'Course: ', resultsHeader:'--- RESULTS ---',
      pointWord:' points', detailHeader:'--- DETAILED ---', targetLabel:'  Target ',
      totalLabel:'  Total: ', arrow1Label:'Avg. arrow 1', arrow2Label:'Avg. arrow 2',
      overallAvgLabel:'Overall avg.', distributionLabel:'  Distribution: ',
      seeInApp:'See results in the app:', loginRequired:'(Requires login with your account)'
    },
    auth: {
      loginTab:'Log in', signupTab:'Create account',
      emailPlaceholder:'Email', passwordPlaceholder:'Password',
      loginBtn:'LOG IN', forgotPassword:'Forgot password?',
      namePlaceholder:'Name', signupPasswordPlaceholder:'Password (min. 6 characters)',
      selectGender:'Select gender', selectBowClass:'Select bow class',
      signupBtn:'CREATE ACCOUNT',
      errUserNotFound:'User not found.', errWrongPassword:'Incorrect password.',
      errInvalidCredential:'Invalid email or password.', errEmailInUse:'Email is already in use.',
      errWeakPassword:'The password is too weak (min. 6 characters).', errInvalidEmail:'Invalid email address.',
      errTooManyRequests:'Too many attempts. Try again later.',
      errNetwork:'Network error. Check your connection.',
      errGeneric:'An error occurred. Try again.', errFillAllFields:'Fill in all fields.',
      errPasswordTooShort:'The password must be at least 6 characters.',
      errEnterEmailFirst:'Enter your email first.', resetEmailSent:'Reset email sent!'
    },
    roundImport: {
      importedToast:'Round imported: {name}', importError:'Import error: {msg}',
      noFileSelected:'No file selected', loginFirst:'Log in first',
      noPlayersInFile:'The file contains no players with results',
      readError:'Could not read the file: {msg}',
      guestFallback:'Guest {n}', importedRoundFallback:'Imported round'
    },
    modals: {
      profil: {
        title:'Complete your profile',
        desc:'Select gender and bow class to enable comparison with other archers.',
        laterBtn:'Later', validationMsg:'Select both gender and bow class.',
        saveError:'Error saving. Try again.'
      },
      qr: { closeBtn:'Close' },
      skip: { title:'Jump to target', placeholder:'Target number', goBtn:'Go' },
      guest: { title:'Add guest', placeholder:"Guest's name", addBtn:'Add' },
      importPlayer: { title:'Who are you?' }
    },
    banners: {
      pwa: { text:'Install 3D Bueskydning on your home screen for quick access', installBtn:'INSTALL APP' },
      iosInstall: {
        line1:'Install 3D Bueskydning on your home screen:',
        shareStepPre:'Tap the ', shareStepPost:' Share icon at the bottom of Safari, and choose "Add to Home Screen".'
      },
      push: {
        text:'Get notified instantly when someone invites you to a shoot – even when the app is closed.',
        enableBtn:'ENABLE NOTIFICATIONS', enabledToast:'Notifications enabled'
      }
    },
    push: {
      permissionError:'Could not request permission: {msg}',
      blocked:"Notifications blocked in the browser — must be changed in the browser's site settings",
      unsupported:'Push notifications are not supported in this browser',
      swError:'Could not register service worker', tokenError:'Could not get push token',
      genericError:'Push error: {msg}', newMessageFallback:'New message'
    },
    friends: {
      title:'Friends', addFriendBtn:'+ Add friend',
      requestAccessBtn:'🔎 May I follow along?', statusPending:'Pending',
      cancelRequestTitle:'Cancel request', statusApproved:'Can see results ✅',
      statusRejected:'Rejected', retryBtn:'Try again', empty:'No friends yet',
      editTitle:'Edit friend', addTitle:'Add friend', deleteConfirm:'Delete {name}?',
      namePlaceholder:'Name', phonePlaceholder:'Phone', clubPlaceholder:'Club',
      bowTypeDefault:'Bow type...', bowTypeRecurve:'Recurve', bowTypeCompound:'Compound',
      bowTypeLongbow:'Longbow', bowTypeBarebow:'Barebow'
    },
    admin: {
      loading:'Loading admins…', empty:'No admins found',
      currentAdminsTitle:'CURRENT ADMINISTRATORS', youTag:'(you)', removeBtn:'Remove',
      period7:'Last 7 days', period30:'Last 30 days', period365:'Last 365 days',
      loadingStats:'Loading…', totalRegistered:'Total registered',
      userNotFound:'User not found', nowAdmin:'{name} is now an admin',
      removeConfirm:'Remove {email} as administrator?', removedAdmin:'{email} has been removed as admin',
      title:'Administrator', addAdminPlaceholder:'Email for new admin',
      usageTitle:'APP USAGE', updateBtn:'Update',
      statsHint:'Click "Update" to fetch statistics', allUsersTitle:'ALL USERS',
      searchUserPlaceholder:'Search name or email…', usersCount:'{n} users'
    },
    meetups: {
      header:'Shall we shoot together?', sectionSuggestBtn:'+ Suggest',
      statusPending:'Pending', statusAccepted:'Joined ✅',
      statusProposing:'Suggesting a different time 🕓', statusDeclined:'Declined ❌',
      empty:'No planned shoots yet',
      joinBtn:'Join', proposeOtherBtn:'Suggest a different time', declineBtn:'Decline',
      acceptProposalBtn:'Accept {date} {time} ({name})', editTimeBtn:'Edit time',
      cancelMeetupBtn:'Cancel', deleteBtn:'Delete',
      cancelledBanner:'❌ Cancelled', notInvitedBanner:'👁 You are not invited — shown only to superadmin',
      dateTimeLine:'{date} at {time}', createdBy:'Created by {name}',
      commentPlaceholder:'Write a comment…', sendBtn:'Send',
      noCoursesToast:'No courses available',
      noFriendsYet:'You have no friends yet', noOtherUsers:'No other registered users',
      notRegisteredNote:'not registered in the app', noRecipientsSelected:'No recipients selected yet',
      selectCourseToast:'Select a course', selectDateTimeToast:'Select date and time',
      selectRecipientToast:'Select at least one recipient',
      invalidNamesToast:'{names} are not registered in the app and were not invited',
      proposalSentToast:'Proposal sent', newTimeAcceptedToast:'New time accepted',
      timeUpdatedToast:'Time updated',
      cancelConfirm:'Cancel this shoot?',
      deleteConfirm:'Delete this shoot permanently? This cannot be undone.',
      modalTitle:'Suggest a joint shoot', proposeAnotherTitle:'Suggest a different time',
      editTimeTitle:'Edit time',
      courseLabel:'Course', selectCoursePlaceholder:'-- Select course --',
      dateLabel:'Date', timeLabel:'Time',
      noteLabel:'Note (optional)', notePlaceholder:'Write a note about the shoot…',
      myFriendsTab:'My friends', allRegisteredTab:'All registered',
      selectAllBtn:'Select all', sendProposalBtn:'Send proposal'
    },
    sharing: {
      title:'May I follow along?',
      emptyState:'Ask to see a friend\'s results by tapping "🔎 May I follow along?" on the person in your friends list above.',
      incomingRequestsTitle:'Requests to see your results',
      acceptBtn:'Accept', rejectBtn:'Reject',
      sharingWithTitle:'You are sharing results with', stopSharingBtn:'Stop sharing',
      viewableTitle:'You can see results for', viewInAnalyseBtn:'View in Analysis',
      ownRequestError:'You cannot request to see your own results',
      notRegisteredError:'{name} is not registered in the app',
      requestSentToast:'Request sent', acceptedToast:'Sharing accepted',
      rejectConfirm:'Reject this request?',
      stopConfirm:'Stop this sharing? The person will immediately lose access to your results.',
      stoppedToast:'Sharing stopped'
    },
    courses: {
      title:'Courses', createBtn:'+ Create course', backBtn:'← Back',
      mapTab:'Map', visitsTab:'Visits', editTab:'Edit',
      showMyPosition:'📍 Show my position', deleteCourseBtn:'🗑 Delete course',
      createModalTitle:'Create course', namePlaceholder:'Course name', searchPlaceholder:'Search course...',
      targets24:'24 targets', targets30:'30 targets',
      locationPlaceholder:'Location (e.g. city)',
      visibilityPublic:'Public', visibilityPrivate:'Private', visibilityHidden:'Hidden (approved only)',
      visibilityHint:'Private: the course is still visible to everyone, but shown with "(Members only)". Hidden: only archers you approve (below) can see the course.',
      membersOnlySuffix:'(Members only)',
      searchUserPlaceholder:'Search registered user…', manualEmailPlaceholder:'…or enter email directly',
      createBtnModal:'Create',
      empty:'No courses yet', targetNameFallback:'Target', emptyVisits:'No visits yet',
      viewResultTitle:'View result',
      infoTitle:'Course info', nameLabel:'Course name', locationLabel:'Location', visibilityLabel:'Visibility',
      saveInfoBtn:'Save course info', targetsHeader:'Targets ({n})', targetTitle:'Target {n}', setGpsTitle:'Set GPS',
      nameLabelTarget:'Name', emojiLabel:'Emoji', distanceLabel:'Distance (m)',
      gpsInfo:'📍 GPS: {coords}', gpsMissing:'No GPS',
      uploadPhotoBtn:'📷 Upload photo', saveAllTargetsBtn:'💾 Save all targets',
      noApprovedYet:'None approved yet',
      savedToast:'Saved!', targetAddedToast:'Target {n} added!', deleteTargetConfirm:'Delete target {n}?',
      deleteTargetError:'Error: Could not delete target', gpsSetToast:'GPS set for target {n}!',
      gpsErrorToast:'GPS error: {msg}', photoSavedToast:'Photo saved!', uploadErrorToast:'Upload error: {msg}',
      allTargetsSavedToast:'All targets saved!', gpsUnavailableToast:'GPS not available',
      deleteCourseConfirm:'Delete course "{name}"?', courseDeletedToast:'Course deleted',
      deleteCourseError:'Error: Could not delete course', courseCreatedToast:'Course created!',
      createCourseError:'Error: Could not create course'
    },
    analyse: {
      title:'Analysis', myselfOption:'Myself',
      filterAll:'All rounds', filterLatest:'Latest round', filterLast10:'Last 10',
      filterLast20:'Last 20', filterSpecific:'Specific round', filterCompare:'Compare rounds',
      allCourses:'All courses', allRulesets:'All rulesets', numRoundsPlaceholder:'Number of rounds',
      onlyCompletedLabel:'Only completed rounds (all targets shot)',
      onlyStartedAt1Label:'Only rounds started at target 1',
      round1Label:'ROUND 1', round2Label:'ROUND 2',
      selectRoundPlaceholder:'Select round...', selectRound2Placeholder:'Select round 2...',
      arrow1:'ARROW 1', arrow2:'ARROW 2',
      singleArrowNote:'{ruleset} is shot with 1 arrow per target — ARROW 1/ARROW 2 is therefore not relevant',
      singleArrowNoteCompare:'{ruleset} is shot with 1 arrow per target — the ARROW 1/ARROW 2 comparison is therefore not relevant',
      notRelevant:'Not relevant', best:'BEST', worst:'HARDEST',
      comparisonTitle:'COMPARISON', vs:'VS',
      wonBy:'{name} won by {diff} points', tie:'Tie!',
      arrowStatsTitle:'ARROW STATISTICS', bestWorstTargetTitle:'BEST AND HARDEST TARGET',
      zoneDistTitle:'DISTRIBUTION PER SCORE ZONE',
      selectTwoRounds:'Select two rounds above', roundsNotFound:'Could not find the rounds',
      meFallback:'Me', viewingResultsFor:'Showing results for {name}',
      statRounds:'ROUNDS', statAvgPerRound:'AVG/ROUND', statBest:'BEST', statLowest:'LOWEST',
      roundsIncludedTitle:'ROUNDS IN THIS ANALYSIS ({n})',
      selectRulesetNote:'Select a specific ruleset in the filter above to see arrow distribution (the rounds in this selection use different rulesets)',
      bestWithArrow1:'Best with ARROW 1 🏹', bestWithArrow2:'Best with ARROW 2 🏹',
      bothArrowsEqual:'Both arrows are equally good 🎯', shotOrdinal:'Shot no. {n}',
      developmentTitle:'DEVELOPMENT (ROUNDS)', oldest:'oldest', newest:'newest',
      perTargetGraphTitle:'AVERAGE PER SHOT ORDER',
      perTargetCaption:'Shot order — 1 = first target shot · dashed line = trend',
      consistencyTitle:'CONSISTENCY (SPREAD)',
      consistencyNote:'Standard deviation in points (same scale as the score, 0-11) — not a 0-1 number. Close to 0 = very consistent through the round; the higher the number, the bigger the swing between the best and hardest targets.',
      fullscreenGraphTitle:'AVERAGE PER SHOT ORDER · pinch to zoom · double-tap to reset',
      consistencyOverTimeTitle:'CONSISTENCY OVER TIME · this course',
      consistencyOverTimeCaption:'Spread per round (same point scale as above) — declining curve = more consistent shooting over time',
      comparisonSectionTitle:'COMPARISON · {gender} {bowClass}', loadingComparison:'Loading...',
      noOtherShootersYet:'No other {gender} {bowClass} archers have shot this course yet.',
      yourAvgPerArrow:'YOUR AVG/ARROW', difference:'DIFFERENCE', othersAvgPerArrow:"OTHERS' AVG/ARROW",
      basedOnRoundsSingular:'Based on {n} round from other archers',
      basedOnRoundsPlural:'Based on {n} rounds from other archers',
      distanceInsightsTitle:'DISTANCE ANALYSIS',
      distanceInsightsSubtitle:'Share of shots hitting {label} per distance group',
      distanceInsightsCoverage:'Based on {used} of {total} rounds — only rounds played on courses with known target distances are included',
      distBucket0to10:'0-10 m', distBucket10to20:'10-20 m', distBucket20to30:'20-30 m',
      killZoneLabel:'the kill zone',
      trendUp:'📈 Your score has risen {pct}% over the last {weeks} weeks',
      trendDown:'📉 Your score has dropped {pct}% over the last {weeks} weeks',
      trendFlat:'Your score has been stable over the last {weeks} weeks',
      trendNotEnoughData:'Not enough rounds in the last {weeks} weeks to show a trend yet',
      weakestZone:'Your biggest weakness is targets at {range}',
      pointPotential:'If your hit rate at {range} matched your average, that would be roughly +{n} points per round'
    }
  }
}

let currentLang = localStorage.getItem(STORAGE_KEY) || 'da'

export function getLang(){ return currentLang }
export function getLocale(){ return currentLang==='da' ? 'da-DK' : 'en-US' }

export function t(key, params){
  const path = key.split('.')
  let val = translations[currentLang]
  for(const p of path) val = val?.[p]
  if(val==null){
    val = translations.da
    for(const p of path) val = val?.[p]
  }
  if(val==null) return key
  if(params) for(const [k,v] of Object.entries(params)) val = val.replace(`{${k}}`, v)
  return val
}

export function applyI18n(root=document){
  root.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n) })
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder = t(el.dataset.i18nPlaceholder) })
  const btn=document.getElementById('lang-btn'); if(btn) btn.textContent=currentLang.toUpperCase()
}

export function setLang(lang){
  currentLang = lang
  localStorage.setItem(STORAGE_KEY, lang)
  document.documentElement.lang = lang
  applyI18n()
}

export function initLang(){
  document.documentElement.lang = currentLang
  applyI18n()
}
