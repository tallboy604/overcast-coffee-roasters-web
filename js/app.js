var app = new Vue({
    el: '#app',
    data: {
        coffees: [
            {
                id: "1",
                name: "Ethiopia Guji Shakiso Sewana Site",
                description:  "Strong jasmine florals, black tea notes, and citrus hints. Acidity is mouthcleansing, the finish marked by mango tea, berry, and passion fruit.",
                price: 4.25,
                cultivar: "Heirloom Cultivars",
                region: "Sewana, Guji Zone",
                processing: "Wet Process (Washed)",
            },
            {
                id: "2",
                name: "Brazil Minasul Competition Eduardo Ferreira",
                description:  "The cup has pleasing, milky mouthfeel that weighs heavy on your tongue, notes of Brazil nut, banana chips, cocoa powder, and dehydrated strawberry. Heavier cocoa with roast.",
                price: 4.00,
                cultivar: "Bourbon",
                region: "	Sul de Minas",
                processing: "Dry Process (Natural) - Patio Sun-dried",
            },
            {
                id: "3",
                name: "Sweet Maria's Ethiopiques Blend",
                description:  "Incredible espresso and brewed coffee. Full City shots have ultra sweet chocolate flavors, along with citrus complexity, and prevalent floral characteristics. It's definitely on the wilder side of espresso, but without being \"over the top\". Fruit flavors shift and the sweet aftertaste lingers long.",
                price: 4.25,
                cultivar: "Heirloom Cultivars",
                region: "Multiple",
                processing: "	Varied. Raised Bed Sun-dried.",
            },
            {
                id: "4",
                name: "Colombia Huila Angelo Eduardo Sosa Tabi Natural",
                description:  "Great and very lively red fruit tones, a bit of floral, a little hint of citrus all combining with a traditional Huila undertone (jammy, nutty and chocolaty).",
                price: 4.25,
                cultivar: "Tabi – a strain created by crossing a couple different Arabicas: Typica, Bourbon and Timor Hybrid",
                region: "El Cogollo a community within the municipality of Gigante in the department of Huila",
                processing: "Natural",
            },
            {
                id: "5",
                name: "Peru Org. SHB EP Norte",
                description:  "A great gentle and smooth cup of coffee. A little bit of acidity at the light roast points which gives a bit of an overly floral tone, as the beans themselves age into the crop year, this will become a bit milder – fresh new crop acidity is usually what we say. From a city + roast and beyond, a low acidity cup with a bit of a sweet edge to it. Medium bodied and predominately chocolaty, a great everyday drinker.",
                price: 3.00,
                cultivar: "Bourbon, Typica, Caturra",
                region: "San Ignacio, Jaen, Cajamarca",
                processing: "Wet Process (Washed)",
                farm: "CENFROCAFE",
            },
            {
                id: "6",
                name: "Guatemalan Huehuetenango SHB EP Gran Quetzal",
                description:  "Delicious surprise and a staff favorite, for its bright, juicy acidity, syrupy body and classic flavors of sweet orange and milk chocolate.",
                price: 3.00,
                cultivar: "Typica, Bourbon, Caturra and Catuai",
                region: "Huehuetenango",
                processing: "Washed, European Prep",
            },
        ]
    }
})