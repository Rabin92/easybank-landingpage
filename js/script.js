// const sliderContents = [
//     {
//       description: `
//       What a pleasure to review. Besides the site being aesthetically
//       pleasing, you've added a lot of fine details including small icons.
//       But the details aren't just in your site... they're in your code.
//       `,
//     },

//     {
//       description: `
//       Phenomenal job on this one! You have shown a deep understanding of
//       pulling and parsing data from a 3<sup>rd</sup> party API and manipulating the
//       HTML DOM using JavaScript!
//       `,
//     },

//     {
//       description: `
//       Fantastic job on this complex project! You have shown a solid
//       understanding of JavaScript, Sass, localStorage, CSS Grid, and using
//       JS plugins! Keep up the good work and happy coding!
//       `,
//     },

//     {
//       description: `
//       You have created a beautifully
//       styled and professional looking portfolio! I really love the page
//       element slide in effects! Your project pop ups looks sharp!
//       `,
//     },
//   ];

//   // Insert data
//   const testimonial = document.querySelector('.testimonial');
//   let testimonialData = '';

//   sliderContents.forEach(sliderContent => {
//     testimonialData += `
//   <div class="testimonial__content">
//       <h2 class="testimonial__heading testimonial__heading--logo">Treehouse</h2>
//       <p class="testimonial__feedback">${sliderContent.description}</p>
//       <div class="testimonial__footer">
//         <img class="testimonial__avatar" src=images/avatar.svg alt="avatar">
//         <p class="testimonial__header testimonial__header--color">Techdegree</p>
//         <p class="testimonial__name testimonial__name--color">- Reviewer</p>
//     </div>
//   </div>
//   `;
//   });

//   testimonial.innerHTML = testimonialData;
