const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("show"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>reveal.observe(el));

document.querySelector(".menu")?.addEventListener("click",()=>{
  const nav=document.querySelector(".nav nav");
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav nav a").forEach(a=>a.addEventListener("click",()=>{
  document.querySelector(".nav nav")?.classList.remove("open");
}));

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const service=document.getElementById("service").value;
  const date=document.getElementById("date").value;
  const time=document.getElementById("time").value || "Flexible";
  const message=document.getElementById("message").value.trim() || "No additional message";
  const text=`Assalam o Alaikum THEMOST!%0A%0AI'd like to request an appointment.%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0APreferred date: ${encodeURIComponent(date)}%0APreferred time: ${encodeURIComponent(time)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/923211119767?text=${text}`,"_blank");
});