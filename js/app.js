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
                active: false
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
                active: false
            },
            {
                id: "4",
                name: "Colombia Huila Angelo Eduardo Sosa Tabi Natural",
                description:  "Great and very lively red fruit tones, a bit of floral, a little hint of citrus all combining with a traditional Huila undertone (jammy, nutty and chocolaty).",
                price: "3.00",
                cultivar: "Tabi – a strain created by crossing a couple different Arabicas: Typica, Bourbon and Timor Hybrid",
                region: "El Cogollo a community within the municipality of Gigante in the department of Huila",
                processing: "Natural",
                active: false
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
                active: false
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
                active: false
            },
            {
                id: "9",
                name: "La Tacita Floral Gesha Blend",
                description: "Floral intensity is what this blend is about. Equal parts Gesha + two washed coffees from Rwandi and Ethiopia, expect jasmine to lily florals, bold citrus flavors, and vibrant acidity.",
                price: "6.00",
                cultivar: "Gesha, Ethiopia Heirloom, Bourbon",
                region: "Acatenango, Guatemala; Illubabor, Western Ethiopia; Karongi, Rwanda",
                processing: "Wet Processed",
                active: false
            },
            {
                id: "10",
                name: "Papua New Guinea Honey Nebilyer Estate",
                description: "Honey process seems to bring out fruited notes like cranberry, raisin, red grape, and underscored by molasses-like sweetness. This PNG boasts body, and with mild acidity, is great espresso too.",
                price: "4.75",
                cultivar: "Arusha, Bourbon, Typica",
                region: "Waghi Valley",
                processing: "Honey Process",
                active: false
            },
            {
                id: "11",
                name: "Ethiopia Debub Merab SWP Decaf",
                description: "Earth-toned cocoa, carob chips, natural dried apricot and raisin, and grain-like qualities that are similar to chocolate rye stout beer. City+ to Full City. Good for espresso.",
                price: "4.25",
                cultivar: "Heirloom Cultivars",
                region: "Sidama and Limu",
                processing: "Wet Process then SWP Decaf",
                active: false
            },
            {
                id: "12",
                name: "Guatemala Huehuetenango Xinabajul SWP Decaf",
                description: "A well-rounded, balanced brew. Flavors of unrefined sugars and dry roasted nut, as well as bittering cocoa powder, and a light herbal accent of tarragon. Satisfying in the middle roast range. Good for espresso.",
                price: "4.25",
                cultivar: "Bourbon, Catuai, Caturra, Typica",
                region: "",
                processing: "Wet Process then SWP Decaf",
                active: false
            },
            {
                id: "13",
                name: "Mexico Chiapas Mayan Harvest Bella Vista",
                description: "The Bella Vista municipality is located deep in the Chiapas region of Mexico, and is the birthplace of Rosalba Cifuentes, the founder of Mayan Harvest. Rosalba founded her organization (which has now grown to 70 producers, 50 of whom are women) to work with coffee producers in the area on improving harvesting and processing their coffee to get more competitive prices. Many of these producers have very little land, so these increased premiums make a significant difference in the producers’ livelihoods. Mayan Harvest also provides medical and dental assistance to its members as well. Beyond its humanitarian impact, the coffee is also of exceptional quality. Chocolate mousse and maple lay a backdrop on which peach and plum notes dance and jasmine-like notes.",
                price: "3.00",
                cultivar: "Bourbon, Catimor, Caturra, Typica",
                region: "La Rinconada, El Progreso, Unión Progreso, and Barrio Montaña communities of Bella Vista, Chiapas, Mexico",
                processing: "Fully washed after pulping, fermenting, then dried in the sun.",
                active: false
            },
            {
                id: "14",
                name: "Brazil Legender Estate Peaberry Natural",
                description: "Legender Especial is a blend of coffees grown in the unique micro-regions of Machado, Poco Fundo and Campestre, located in Minas Gerais State, Brazil. Most coffee regions in Brazil are well known for large coffee plantations in big farms. Legender Especial goes in the opposite direction, consisting of small farms called sitios. All lots are purchased directly from growers committed to quality. This coffee  has a nice full flavor to it. Creamy/buttery, with caramel and slight cocoa and some malty flavors. Really nice floral aroma.",
                price: "3.00",
                cultivar: "Mundo Novo, Yellow Catuai, Red Catuai",
                region: "Machado, Poco Fundo and Campestre, located in Minas Gerais State",
                processing: "Natural (Patio sun dried)",
                active: false
            },
            {
                id: "15",
                name: "Ethiopia Natural Yirgacheffe Gelana Abaya G1",
                description: "Balanced and sweet with crisp fruit acidity and a smooth mouthfeel; lots of berry and dry red wine with floral, cocoa, caramel and blueberry flavors.",
                price: "3.00",
                cultivar: "Ethiopian Heirloom",
                region: "Yirgacheffe, Gelana and Abaya districts",
                processing: "Natural",
                active: true
            },
            {
                id: "16",
                name: "El Salvador Las Victorias Orange Bourbon",
                description: "With over 100 years of experience producing coffee, the descendants of the Magaña-Menendez family clearly have the process down to a science. As members of Rainforest Alliance, their commitment to sustainability and the preservation of their ecosystems is very serious. This coffee is big and juicy with a tangerine-like citrus, and a black cherry-like sweetness.",
                price: "3.00",
                cultivar: "Orange Bourbon",
                region: "Apaneca-Ilamatepec Mountain",
                processing: "Fully washed",
                active: true
            },
            {
                id: "17",
                name: "Colombia Royal Select MWP Decaf",
                description: "Colombia Royal Select MWP Decaf comes from small family-owned farms in the Colombian 'coffee triangle.' Small coffee producers pick and process their coffee at their own micro-wet mills and then dry their own coffee, typically on elevated tables inside solar dryers that provide protection from the rain. This coffee has a nice smooth rich flavor of caramel and chocolate to it with a nutty aroma, a bit of brightness and a slight orange flavor at the end.",
                price: "3.00",
                cultivar: "Castillo",
                region: "Caldas, Risaralda and Quindio",
                processing: "MWP",
                active: true
            },
            {
                id: "18",
                name: "Burundi Kayanza Gakenke",
                description: "A lovely, delicate Burundi cup. Fruited hints of apricot and dried papaya with complex baking spice notes woven through, like mace, clove, and anise. Syrupy sweetness from start to finish and mild floral character.",
                price: "2.50",
                cultivar: "Bourbon",
                region: "Gakenke, Kayanza Province",
                processing: "Wet Process (Washed)",
                active: true
            },
            {
                id: "19",
                name: "Rwanda Nyamasheke Kanyege Station",
                description: "Cane juice sweetness anchors the cup, lemon grass tea, citric acidity, cinnamon and all-spice finish. Robust spiced chocolate when roasted dark. Prime espresso option.",
                price: "2.50",
                cultivar: "Bourbon",
                region: "Nyamasheke, Western Province",
                processing: "Wet Process",
                active: true
            }
        ]
    }
});

}); // End of use strict
