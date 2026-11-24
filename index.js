const art=[
 {id:1,c:"ph",n:"Manunggul Jar",m:"Palawan · about 890–710 BC",d:"A burial jar from the Manunggul Cave in the Tabon Caves complex. Two figures sit on the lid in a boat, an image of the soul's journey to the afterlife.",i:"M20 14h24v6c10 4 14 14 14 22 0 10-8 18-26 18S6 52 6 42c0-8 4-18 14-22z"},
 {id:2,c:"ph",n:"Laguna Copperplate Inscription",m:"Laguna · dated 900 CE",d:"The oldest known written document found in the Philippines. It records the cancelling of a debt, in a mix of Old Malay, Old Javanese and Sanskrit words.",i:"M8 14h48v36H8zM16 24h32M16 32h32M16 40h22"},
 {id:3,c:"ph",n:"Ifugao Bulul",m:"Cordillera · carved wood",d:"A seated rice guardian carved by the Ifugao people. Families keep a pair near the granary to watch over the harvest.",i:"M24 6h16v14h8v14l-6 6v18H22V40l-6-6V20h8z"},
 {id:4,c:"jp",n:"Jōmon Flame Pot",m:"Niigata · about 3000–2000 BC",d:"Early Jōmon potters shaped clay into crowns of swirling peaks that look like fire. It is among the oldest decorated pottery in the world.",i:"M18 58h28l4-22H14zM14 36l4-14 6 8 8-20 8 20 6-8 4 14"},
 {id:5,c:"jp",n:"Haniwa Warrior",m:"Kofun period · 5th–6th century",d:"Hollow clay figures were placed on the mounds of rulers. This warrior wears armor and stands ready to guard the tomb.",i:"M22 6h20l4 14H18zM18 24h28v22H18zM22 46v14M42 46v14"},
 {id:6,c:"jp",n:"The Great Wave",m:"Edo period · about 1831",d:"Hokusai's woodblock print of a towering wave over fishing boats, with Mount Fuji small in the distance, became one of the world's best-known images.",i:"M6 52c6-20 18-34 34-34-6 6-4 12 2 14-6 2-8 8-4 12 8 0 14-4 16-10v18z"},
 {id:7,c:"ph",n:"Callao Cave Foot Bone",m:"Cagayan · about 67,000 years old",d:"A small foot bone found in Callao Cave in 2007. It is the oldest known human fossil in the Philippines and later helped scientists describe a new human relative, Homo luzonensis.",i:"M18 12c6-6 14-2 12 6l8 22c6-2 12 2 10 8-4 8-14 4-14-2L20 24c-8-2-8-10-2-12z"},
 {id:8,c:"ph",n:"Golden Tara of Agusan",m:"Butuan · 13th–14th century",d:"A gold figure about 1.7 kg in weight, found in Agusan del Sur in 1917. Its style shows the links between early Philippine kingdoms and the wider Buddhist and Hindu world of Southeast Asia.",i:"M32 6a8 8 0 100 16 8 8 0 000-16zM20 60l4-24h16l4 24zM14 34h36"},
 {id:9,c:"ph",n:"Butuan Balangay Boats",m:"Butuan · from about the 4th century CE",d:"Remains of wooden plank boats built by edge-joining planks with wooden pegs, with no nails. They show how skilled early Filipinos were as shipbuilders and sea traders.",i:"M6 40h52l-8 14H14zM32 40V10l16 22z"},
 {id:10,c:"ph",n:"Sarimanok",m:"Lanao · Maranao woodcarving",d:"A colorful legendary bird carved and painted by the Maranao people, usually holding a fish in its beak. It stands for good fortune and appears on homes and ceremonial objects.",i:"M14 40c0-14 10-22 22-18l10-10 2 12c6 4 6 14 0 18l-8 6-6 12-4-12c-10 0-16-4-16-8z"},
 {id:11,c:"ph",n:"T'nalak Dream Weaving",m:"South Cotabato · T'boli textile",d:"A cloth woven from abaca fiber by T'boli women, who say the patterns come to them in dreams. The reddish-brown and black designs are tied to the weaver's spiritual life.",i:"M8 8h48v48H8zM8 20h48M8 32h48M8 44h48M20 8v48M32 8v48M44 8v48"},
 {id:12,c:"ph",n:"Boxer Codex",m:"Manila · about 1590",d:"An illustrated Spanish manuscript showing the peoples of the Philippines and nearby lands in the late 1500s, with portraits of clothing, tattoos and jewelry.",i:"M10 10h20c2 0 2 2 2 2v44c0-2-2-2-2-2H10zM54 10H34c-2 0-2 2-2 2v44c0-2 2-2 2-2h20z"},
 {id:13,c:"jp",n:"Dogū Figurine",m:"Late Jōmon · about 1000–400 BC",d:"Clay figures with wide eyes and rounded bodies made by Jōmon people. Many are found broken, which suggests they were used in rituals rather than as everyday objects.",i:"M32 6a8 8 0 100 16 8 8 0 000-16zM14 28h36l-6 12-4 20H24l-4-20z"},
 {id:14,c:"jp",n:"Samurai Sword",m:"Kamakura to Edo period",d:"Swordsmiths folded and hammered steel to give the blade a hard edge and a flexible core. The curved blade and the wavy line along its edge are the marks of the smith's craft.",i:"M10 54L54 10M46 6l12 12M8 56l8-2-6-6z"},
 {id:15,c:"jp",n:"Noh Mask",m:"Muromachi period onward",d:"Masks carved from cypress wood for Noh theater. The faces look calm, but a slight tilt of the head makes them seem to smile or grieve.",i:"M32 6c-14 0-20 12-18 26 2 14 10 26 18 26s16-12 18-26C52 18 46 6 32 6zM22 28q4-4 8 0M34 28q4-4 8 0M26 44q6 4 12 0"},
 {id:16,c:"jp",n:"Raku Tea Bowl",m:"Kyoto · from the 16th century",d:"Hand-shaped bowls made for the tea ceremony. The Raku family of potters has made them in Kyoto for generations, each bowl formed by hand rather than on a wheel.",i:"M8 24h48c0 20-10 32-24 32S8 44 8 24zM24 56h16"},
 {id:17,c:"jp",n:"Tale of Genji Scroll",m:"Heian period · 12th century",d:"The oldest surviving illustrated scrolls of the Tale of Genji, a novel written by Murasaki Shikibu around 1000 CE. Faces are drawn with simple lines, and the roofs are left open so the viewer looks down into each scene.",i:"M12 10h40v44H12zM12 10c0-4 6-4 6 0M52 54c0 4-6 4-6 0M20 22h24M20 32h24M20 42h14"},
 {id:18,c:"jp",n:"Kintsugi Bowl",m:"Muromachi period onward",d:"A broken bowl mended with lacquer and gold dust. Instead of hiding the crack, the repair makes it part of the bowl's story.",i:"M8 24h48c0 20-10 32-24 32S8 44 8 24zM24 56h16M30 24l-4 10 8 6-4 12"}
];
const grid=document.getElementById("grid"),dlg=document.getElementById("dlg"),dbody=document.getElementById("dbody");
function render(f){
  grid.innerHTML="";
  art.filter(a=>f==="all"||a.c===f).forEach(a=>{
    const b=document.createElement("button");
    b.className="item "+a.c;
    b.innerHTML='<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" aria-hidden="true"><path d="'+a.i+'"/></svg><b>'+a.n+'</b><span>'+a.m+'</span>';
    b.addEventListener("click",()=>{
      dbody.innerHTML='<span class="meta">'+(a.c==="ph"?"Philippines":"Japan")+'</span><h3 id="dt">'+a.n+'</h3><p class="meta">'+a.m+'</p><p>'+a.d+'</p>';
      dlg.showModal();
    });
    grid.appendChild(b);
  });
}
document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(x=>x.setAttribute("aria-pressed",x===t));
  render(t.dataset.f);
}));
document.getElementById("close").addEventListener("click",()=>dlg.close());
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
render("all");

document.getElementById("form").addEventListener("submit",e=>{
  e.preventDefault();
  const v=document.getElementById("email").value.trim(),m=document.getElementById("msg");
  if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){m.style.color="var(--ph)";m.textContent="Thank you. We will email you at launch.";e.target.reset();}
  else{m.style.color="var(--jp)";m.textContent="Enter a valid email address, like name@example.com.";}
});