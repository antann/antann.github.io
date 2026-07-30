# antann.github.io

Vetrina dei miei progetti open source, pubblicata su GitHub Pages.

**→ [antann.github.io](https://antann.github.io/)**

Pagina singola, statica, senza dipendenze: tre file (`index.html`, `assets/style.css`,
`assets/main.js`). L'impianto grafico mette a confronto due colonne — il *sorgente* in
monospazio a sinistra, la *pagina composta* a destra — perché è esattamente ciò che fanno
i progetti presentati.

## I progetti

### MD2PDF — Markdown → PDF

Applicazione desktop: si apre un file Markdown, si sceglie un template e si ottiene il PDF.
L'anteprima si aggiorna mentre si scrive, quindi l'impaginazione si vede prima di generare
il documento.

- quattro template pronti, si cambia con un clic
- anteprima dal vivo del documento impaginato
- il PDF si salva dove si vuole, senza passare dal browser
- installatore per Windows

Stack: React · Vite · Electron
[Codice](https://github.com/antann/MD2PDF) · [Release](https://github.com/antann/MD2PDF/releases)

### TEX2PDF — LaTeX → PDF

Si incolla il corpo del documento oppure un `.tex` completo: TEX2PDF riconosce da solo
quale dei due gli è stato dato e compila. Il motore Tectonic è incluso, quindi non serve
installare una distribuzione TeX.

- editor con evidenziazione della sintassi
- anteprima del PDF dentro la pagina
- gli stessi quattro template di MD2PDF
- motore Tectonic incluso, si prepara al primo avvio

Stack: React · Vite · Node · Tectonic
[Codice](https://github.com/antann/TEX2PDF) · [Release](https://github.com/antann/TEX2PDF/releases)

## I quattro template

Identici nei due strumenti:

| template | uso |
|---|---|
| **tecnico** | documentazione e specifiche: titoli numerati, blocchi di codice, tabelle |
| **relazione** | testo continuo per relazioni e rapporti: frontespizio, indice, note |
| **manuale** | istruzioni passo passo: paragrafi brevi, numerazione delle procedure |
| **appunti** | impaginazione leggera per appunti e bozze: margini larghi, elenchi |

Entrambi i progetti girano in locale: nessun account, nessun file caricato da qualche
parte. Le istruzioni complete stanno nel README di ciascun repository.

## Questo sito

```
index.html          pagina unica
assets/style.css    foglio di stile (nomi delle classi in italiano)
assets/main.js      composizione all'apertura, ~15 righe, nessuna dipendenza
assets/favicon.svg
.nojekyll           disattiva Jekyll: i file sono serviti così come sono
```

Nessun build step e nessun pacchetto da installare. Per l'anteprima locale basta aprire
`index.html` nel browser, oppure servire la cartella:

```
python -m http.server 8000
```

Il deploy è il push su `main`: GitHub Pages pubblica il branch così com'è.

L'unica risorsa esterna sono i font di Google (Newsreader, Instrument Sans, IBM Plex Mono),
tutti con fallback di sistema.
