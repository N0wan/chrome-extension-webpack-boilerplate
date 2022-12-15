const tr = document.querySelector('#maincontent .order.tracking tr');
if (tr) {
    console.log('Hello Funcaps !');
    const [shipper, tracking] = tr.children;
    if (/PostNL/i.test(shipper.innerText)) {
        tracking.innerHTML = `<a href="https://jouw.postnl.be/track-and-trace/${tracking.innerText}-BE-4032?language=fr" target="_blank" onclick="window.close()">${tracking.innerText}</a>`;
    }
}
