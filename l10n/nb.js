OC.L10N.register(
    "richdocumentscode",
    {
    "Built-in CODE Server" : "Innebygd CODE Server",
    "Collabora Online - Built-in CODE Server" : "Collabora Online - Innebygd CODE Server",
    "Built-in Collabora Online Development Edition (CODE) server for local testing and non-production use" : "Innebygd Collabora Online Development Edition (CODE) server for lokal testing og ikke-produksjonsbruk",
    "**This app has to be installed and used together with the [Nextcloud Office](https://apps.nextcloud.com/apps/richdocuments) integration app.**\n\nCollabora Online is a powerful LibreOffice-based online office suite with collaborative editing, which supports all major documents, spreadsheet and presentation file formats and works together with all modern browsers.\n\n* This app provides a built-in server with all of the document editing features of Collabora Online. \n* Easy to install, for personal use or for small teams. \n* A bit slower than a standalone server and without the advanced scalability features.\n\n**System Requirements:**\n- Linux running on ```x86-64``` or ```arm64/aarch64```\n- A ```glibc``` based distribution/container (```musl libc``` is **not** supported)\n- Fontconfig (```libfontconfig.so.1```)\n- Additional requirements can be found in [here](https://github.com/CollaboraOnline/richdocumentscode#richdocumentscode)\n          \n*The download is rather big so it is possible you will experience a time-out when installing via the web interface.* You can use the OCC command install the built-in server from the command-line instead:\n\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n```\nWhere `wwwrun` is the user of your web server. This is ```www-data``` on Debian, Ubuntu and derivatives, `wwwrun` on SUSE based distributions, `apache` on Red Hat/Fedora and `http` on Arch linux and derivatives.\n\nUpdates can be done like this:\n```\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n```\n\nOf course, alternatively you could increase memory usage and PHP time-outs by default, see the [Nextcloud documentation.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)\n\nAdditional troubleshooting tips can be found [here](https://github.com/CollaboraOnline/richdocumentscode?tab=readme-ov-file#troubleshooting)." : "**Denne appen må installeres og brukes sammen med [Nextcloud Office](https://apps.nextcloud.com/apps/richdocuments) integrasjon-appen..**\n\nCollabora Online er en kraftig LibreOffice-basert nettkontorpakke med samarbeidende redigering, som støtter alle større dokumenter, regneark og presentasjonsfilformater og fungerer sammen med alle moderne nettlesere.\n\n* Denne appen gir en innebygd server med alle dokumentredigeringsfunksjonene til Collabora Online. \n* Enkel å installere, for personlig bruk eller for små lag. \n* Litt tregere enn en frittstående server og uten avanserte skalerbarhetsfunksjoner.\n\n**Systemkrav:**\n- Linux som kjører på \"x86-64\" eller \"arm64/aarch64\"\n- En \"glibc\"-basert distribusjon/beholder (\"musl libc\" støttes **ikke**)\n- Fontconfig (\"libfontconfig.so.1\")\n- Ytterligere krav finner du [her](https://github.com/CollaboraOnline/richdocumentscode#richdocumentscode)\n          \n*Nedlastingen er ganske stor, så det er mulig du opplever et tidsavbrudd når du bruker webgrensesnittet.* Du kan istedet bruke kommandolinjeverktøyet OCC til å installere den innebygde serveren:\n\n\"\nsudo -u wwwrun php -d memory_limit=512M ./occ app:install richdocumentscode\n\"\nHvor 'wwwrun' er brukeren av webserveren din. Dette er '''www-data''' på Debian, Ubuntu og derivater, 'wwwrun' på SUSE-baserte distribusjoner, 'apache' på Red Hat/Fedora og 'http' på Arch linux og derivater.\n\nOppdateringer kan gjøres slik:\n\"\nsudo -u wwwrun php -d memory_limit=512M ./occ app:update --all\n\"\n\nAlternativt kan du selvfølgelig øke minnebruken og PHP-tidsavbrudd som standard, se [Nextcloud dokumentasjon.](https://docs.nextcloud.com/server/latest/admin_manual/configuration_files/big_file_upload_configuration.html?highlight=php%20timeout#configuring-your-web-server)\n\nDu finner flere feilsøkingstips [her](https://github.com/CollaboraOnline/richdocumentscode?tab=readme-ov-file#troubleshooting).",
    "Your system is ARM64, but you have installed the x86_64 version of the app. Please remove this and" : "Systemet ditt er ARM64, men du har installert x86_64-versjonen av appen. Vennligst fjern dette og",
    "install the correct version from the Nextcloud App Store." : "installer riktig versjon fra Nextcloud App Store.",
    "Your system is x86_64, but you have installed the ARM64 version of the app. Please remove this and" : "Systemet ditt er x86_64, men du har installert ARM64-versjonen av appen. Vennligst fjern dette og",
    "You have the Collabora Online app enabled. For further information and configuration, please check:" : "Du har Collabora Online-appen aktivert. For mer informasjon og konfigurasjon, vennligst sjekk:",
    "Administration settings > Nextcloud Office" : "Administrasjonsinnstillinger > Nextcloud Office",
    "The Built-in CODE Server is designed to work with the Nextcloud Office app." : "Den innebygde CODE Server er designet for å fungere med Nextcloud Office-appen.",
    "Install it from the Nextcloud App Store." : "Installer den fra Nextcloud-appbutikk",
    "An error occurred while trying to check your Collabora Online app installation. You may report this error\n                with the tag: <em>richdocuments-EnabledCheckFailed</em>" : "Det oppstod en feil under forsøk på å sjekke Collabora Online-appen din. Du kan rapportere denne feilen\n                med taggen: <em>richdocuments-EnabledCheckFailed</em>"
},
"nplurals=2; plural=(n != 1);");
