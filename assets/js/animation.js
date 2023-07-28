const weExcel = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelectorAll('.row');

      square.forEach(item=> {
        if (entry.isIntersecting) {
            item.classList.add('fadeInUp');
            return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          item.classList.remove('fadeInUp');
      })
    });
  });
  
  weExcel.observe(document.querySelector('#services'));

  const about = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelectorAll('.card');

      square.forEach(item=> {
        if (entry.isIntersecting) {
            item.classList.add('fadeInUp');
            return; // if we added the class, exit the function
          }
      
          // We're not intersecting, so remove the class!
          item.classList.remove('fadeInUp');
      })
    });
  });
  
  about.observe(document.querySelector('#about'));