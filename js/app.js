$(function() {
  "use strict"; // Start of use strict

  //enable bootstrap popovers and tooltips
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $('.navbar').addClass('d-none');
  });
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $('.navbar').removeClass('d-none');
  });
  
  // init vue.js app
  var app = new Vue({
    el: '#app',
    data: {
        coffees: [
            {
                id: "1",
                name: "Ethiopia Guji Shakiso Sewana Site",
                description:  "Strong jasmine florals, black tea notes, and citrus hints. Acidity is mouthcleansing, the finish marked by mango tea, berry, and passion fruit.",
                price: "4.25",
                cultivar: "Heirloom Cultivars",
                region: "Sewana, Guji Zone",
                processing: "Wet Process (Washed)",
                active: true
            },
            {
                id: "2",
                name: "Brazil Minasul Competition Eduardo Ferreira",
                description:  "The cup has pleasing, milky mouthfeel that weighs heavy on your tongue, notes of Brazil nut, banana chips, cocoa powder, and dehydrated strawberry. Heavier cocoa with roast.",
                price: "4.00",
                cultivar: "Bourbon",
                region: "	Sul de Minas",
                processing: "Dry Process (Natural) - Patio Sun-dried",
                active: false
            },
            {
                id: "3",
                name: "Sweet Maria's Ethiopiques Blend",
                description:  "Incredible espresso and brewed coffee. Full City shots have ultra sweet chocolate flavors, along with citrus complexity, and prevalent floral characteristics. It's definitely on the wilder side of espresso, but without being \"over the top\". Fruit flavors shift and the sweet aftertaste lingers long.",
                price: "4.25",
                cultivar: "Heirloom Cultivars",
                region: "Multiple",
                processing: "	Varied. Raised Bed Sun-dried.",
                active: true
            },
            {
                id: "4",
                name: "Colombia Huila Angelo Eduardo Sosa Tabi Natural",
                description:  "Great and very lively red fruit tones, a bit of floral, a little hint of citrus all combining with a traditional Huila undertone (jammy, nutty and chocolaty).",
                price: "4.25",
                cultivar: "Tabi – a strain created by crossing a couple different Arabicas: Typica, Bourbon and Timor Hybrid",
                region: "El Cogollo a community within the municipality of Gigante in the department of Huila",
                processing: "Natural",
                active: true
            },
            {
                id: "5",
                name: "Peru Org. SHB EP Norte",
                description:  "A great gentle and smooth cup of coffee. A little bit of acidity at the light roast points which gives a bit of an overly floral tone, as the beans themselves age into the crop year, this will become a bit milder – fresh new crop acidity is usually what we say. From a city + roast and beyond, a low acidity cup with a bit of a sweet edge to it. Medium bodied and predominately chocolaty, a great everyday drinker.",
                price: "3.00",
                cultivar: "Bourbon, Typica, Caturra",
                region: "San Ignacio, Jaen, Cajamarca",
                processing: "Wet Process (Washed)",
                farm: "CENFROCAFE",
                active: true
            },
            {
                id: "6",
                name: "Guatemala Huehuetenango SHB EP Gran Quetzal",
                description:  "Delicious surprise and a staff favorite, for its bright, juicy acidity, syrupy body and classic flavors of sweet orange and milk chocolate.",
                price: "3.00",
                cultivar: "Typica, Bourbon, Caturra and Catuai",
                region: "Huehuetenango",
                processing: "Washed, European Prep",
                active: false
            },
            {
                id: "7",
                name: "Ethiopia Sidama Natural Decaf",
                description:  "Smooth maple syrup sweetness and subtle fruit and floral character.  As espresso, flavors of salted caramel, honey, and candied citrus.",
                price: "4.25",
                cultivar: "Indigenous landraces and selections",
                region: "Sidama, SNNP, Ethiopia",
                processing: "Natural--dried in the fruit. Decaffeinated by Mountain Water Process",
                active: false
            },
            {
                id: "8",
                name: "Sumatra Wet Process Gunung Tujuh",
                description:  "A sweet foundation of burned sugar and caramel/toffee, a yellow custard note, dried apple, tamarind, a basil hint, and a vibrant rindy orange flavor. A clean, wet processed Sumatran coffee.",
                price: "4.25",
                cultivar: "Typica",
                region: "Gunung Tujuh, Mount Kerinci",
                processing: "Wet Process, Patio Sun-Dried",
                active: true
            },
            {
                id: "9",
                name: "La Tacita Floral Gesha Blend",
                description: "Floral intensity is what this blend is about. Equal parts Gesha + two washed coffees from Rwandi and Ethiopia, expect jasmine to lily florals, bold citrus flavors, and vibrant acidity.",
                price: "6.00",
                cultivar: "Gesha, Ethiopia Heirloom, Bourbon",
                region: "Acatenango, Guatemala; Illubabor, Western Ethiopia; Karongi, Rwanda",
                processing: "Wet Processed",
                active: true
            },
            {
                id: "10",
                name: "Papua New Guinea Honey Nebilyer Estate",
                description: "Honey process seems to bring out fruited notes like cranberry, raisin, red grape, and underscored by molasses-like sweetness. This PNG boasts body, and with mild acidity, is great espresso too.",
                price: "4.25",
                cultivar: "Arusha, Bourbon, Typica",
                region: "Waghi Valley",
                processing: "Honey Process",
                active: true
            },
            {
                id: "11",
                name: "Ethiopia Debub Merab SWP Decaf",
                description: "Earth-toned cocoa, carob chips, natural dried apricot and raisin, and grain-like qualities that are similar to chocolate rye stout beer. City+ to Full City. Good for espresso.",
                price: "4.25",
                cultivar: "Heirloom Cultivars",
                region: "Sidama and Limu",
                processing: "Wet Process then SWP Decaf",
                active: true
            },
            {
                id: "12",
                name: "Guatemala Huehuetenango Xinabajul SWP Decaf",
                description: "A well-rounded, balanced brew. Flavors of unrefined sugars and dry roasted nut, as well as bittering cocoa powder, and a light herbal accent of tarragon. Satisfying in the middle roast range. Good for espresso.",
                price: "4.25",
                cultivar: "Bourbon, Catuai, Caturra, Typica",
                region: "",
                processing: "Wet Process then SWP Decaf",
                active: true
            }
        ]
    }
});

}); // End of use strict
