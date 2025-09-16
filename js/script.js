const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");

  question.addEventListener("click", () => {
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      answer.style.maxHeight = null;
    } else {

      faqs.forEach(otherFaq => {
        if (otherFaq.classList.contains("active")) {
          otherFaq.classList.remove("active");
          otherFaq.querySelector(".answer").style.maxHeight = null;
        }
      });

      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

const title = document.querySelector('.faq-title');
const text = title.textContent;
title.textContent = '';

// Wrap each letter in a span
[...text].forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.display = 'inline-block';
  span.style.animation = `wiggle 2s ease-in-out infinite`;
  span.style.animationDelay = `${i * 0.1}s`; // stagger each letter
  title.appendChild(span);
});
