const d = new Date();
let year = d.getFullYear();

const copyright = document.querySelector('#copyright');
copyright.textContent += `&copy; ${year} | Juvenato Mendes Neto | Boston`;


const lastUpdated = document.querySelector('#lastMod');
lastUpdated.textContent += `<strong>Last updated: ${document.lastModified}</strong>`;
