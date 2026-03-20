(function () {
  "use strict";

  function createPlaceholderImage(label) {
    var safeLabel = String(label)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    var svg =
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 960 600'>" +
      "<defs>" +
      "<linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>" +
      "<stop offset='0%' stop-color='#300b11'/>" +
      "<stop offset='100%' stop-color='#0e0b0d'/>" +
      "</linearGradient>" +
      "</defs>" +
      "<rect width='960' height='600' fill='url(#bg)'/>" +
      "<circle cx='165' cy='150' r='120' fill='rgba(224,54,54,0.28)'/>" +
      "<circle cx='805' cy='470' r='170' fill='rgba(224,54,54,0.2)'/>" +
      "<rect x='95' y='365' width='770' height='140' rx='24' fill='rgba(0,0,0,0.36)'/>" +
      "<text x='480' y='205' fill='rgba(255,211,216,0.85)' text-anchor='middle' font-family='Segoe UI, sans-serif' font-size='26' letter-spacing='4'>EXTINCT ANIMALS</text>" +
      "<text x='480' y='450' fill='#ffe7ea' text-anchor='middle' font-family='Georgia, serif' font-size='52'>" +
      safeLabel +
      "</text>" +
      "</svg>";

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  function buildAssetUrl(path) {
    return path
      .split("/")
      .map(function (segment) {
        return encodeURIComponent(segment);
      })
      .join("/");
  }

  function resolveSpeciesImage(species) {
    if (species.image && species.image.indexOf("assets/") === 0) {
      return buildAssetUrl(species.image);
    }

    if (
      species.image &&
      (species.image.indexOf("data:") === 0 || species.image.indexOf("http") === 0 || species.image.indexOf("/") === 0)
    ) {
      return species.image;
    }

    return createPlaceholderImage(species.commonName);
  }

  var extinctSpecies = [
    {
      id: "dodo",
      commonName: "Dodo",
      scientificName: "Raphus cucullatus",
      type: "Bird",
      region: "Mauritius",
      habitat: "Island forests",
      diet: "Fruits and seeds",
      period: "17th century",
      extinctionCause: "Overhunting and invasive species",
      shortFact: "The dodo evolved without land predators, which made it highly vulnerable after human arrival.",
      category: "Island endemic",
      extinctionYear: 1681,
      image: "assets/images/DoDo.png"
    },
    {
      id: "woolly-mammoth",
      commonName: "Woolly Mammoth",
      scientificName: "Mammuthus primigenius",
      type: "Mammal",
      region: "Northern Eurasia and North America",
      habitat: "Cold steppe grasslands",
      diet: "Grasses and shrubs",
      period: "Late Pleistocene",
      extinctionCause: "Climate warming and hunting pressure",
      shortFact: "Small isolated mammoth populations survived on Arctic islands thousands of years after mainland extinction.",
      category: "Ice Age megafauna",
      extinctionYear: -2000,
      image: "assets/images/Woolly mammoth.png"
    },
    {
      id: "thylacine",
      commonName: "Thylacine",
      scientificName: "Thylacinus cynocephalus",
      type: "Marsupial",
      region: "Tasmania",
      habitat: "Woodlands and grasslands",
      diet: "Carnivorous",
      period: "20th century",
      extinctionCause: "Bounty hunting and habitat pressure",
      shortFact: "The last known thylacine died in captivity in 1936 at the Hobart Zoo.",
      category: "Modern extinction",
      extinctionYear: 1936,
      image: "assets/images/Thylacine.png"
    },
    {
      id: "passenger-pigeon",
      commonName: "Passenger Pigeon",
      scientificName: "Ectopistes migratorius",
      type: "Bird",
      region: "North America",
      habitat: "Temperate forests",
      diet: "Seeds and mast",
      period: "Early 20th century",
      extinctionCause: "Commercial hunting and deforestation",
      shortFact: "Once one of the most abundant birds on Earth, it collapsed rapidly under industrial-scale hunting.",
      category: "Modern extinction",
      extinctionYear: 1914,
      image: "assets/images/Passenger Pigeon.png"
    },
    {
      id: "great-auk",
      commonName: "Great Auk",
      scientificName: "Pinguinus impennis",
      type: "Bird",
      region: "North Atlantic",
      habitat: "Rocky offshore islands",
      diet: "Fish",
      period: "19th century",
      extinctionCause: "Overharvesting for feathers and meat",
      shortFact: "The great auk was flightless and heavily hunted, making colonies easy targets.",
      category: "Marine bird",
      extinctionYear: 1844,
      image: "assets/images/Great Auk.png"
    },
    {
      id: "quagga",
      commonName: "Quagga",
      scientificName: "Equus quagga quagga",
      type: "Mammal",
      region: "South Africa",
      habitat: "Open grasslands",
      diet: "Grazing herbivore",
      period: "19th century",
      extinctionCause: "Overhunting and land conversion",
      shortFact: "The quagga was a plains zebra subspecies with stripes mainly on the front half of its body.",
      category: "Large herbivore",
      extinctionYear: 1883,
      image: "assets/images/Quagga.png"
    },
    {
      id: "moa",
      commonName: "Moa",
      scientificName: "Dinornithiformes",
      type: "Bird",
      region: "New Zealand",
      habitat: "Forests and shrublands",
      diet: "Herbivorous",
      period: "15th century",
      extinctionCause: "Overhunting and habitat burning",
      shortFact: "Some moa species were among the tallest birds ever known, with no wings at all.",
      category: "Island endemic",
      extinctionYear: 1445,
      image: "assets/images/Moa.png"
    },
    {
      id: "aurochs",
      commonName: "Aurochs",
      scientificName: "Bos primigenius",
      type: "Mammal",
      region: "Europe, Asia, and North Africa",
      habitat: "Forest edges and meadows",
      diet: "Grazing herbivore",
      period: "17th century",
      extinctionCause: "Hunting and habitat loss",
      shortFact: "Aurochs were wild cattle ancestors and played major ecological roles in grassland maintenance.",
      category: "Large herbivore",
      extinctionYear: 1627,
      image: "assets/images/Aurochs.png"
    },
    {
      id: "stellers-sea-cow",
      commonName: "Steller's Sea Cow",
      scientificName: "Hydrodamalis gigas",
      type: "Marine Mammal",
      region: "Bering Sea",
      habitat: "Coastal kelp forests",
      diet: "Sea grasses and kelp",
      period: "18th century",
      extinctionCause: "Intensive hunting",
      shortFact: "It disappeared within 27 years of scientific discovery due to rapid exploitation by hunters.",
      category: "Marine giant",
      extinctionYear: 1768,
      image: "assets/images/Steller's Sea Cow.png"
    },
    {
      id: "smilodon",
      commonName: "Smilodon",
      scientificName: "Smilodon fatalis",
      type: "Mammal",
      region: "The Americas",
      habitat: "Grasslands and open woodlands",
      diet: "Large herbivores",
      period: "Late Pleistocene",
      extinctionCause: "Climate change and prey decline",
      shortFact: "Smilodon, often called the saber-toothed cat, had elongated canine teeth adapted for large prey.",
      category: "Ice Age predator",
      extinctionYear: -10000,
      image: "assets/images/Smilodon.png"
    },
    {
      id: "carolina-parakeet",
      commonName: "Carolina Parakeet",
      scientificName: "Conuropsis carolinensis",
      type: "Bird",
      region: "Eastern North America",
      habitat: "Bottomland forests and river valleys",
      diet: "Seeds, fruits, and buds",
      period: "Early 20th century",
      extinctionCause: "Deforestation, hunting, and disease",
      shortFact: "It was the only parrot native to the eastern United States.",
      category: "Modern extinction",
      extinctionYear: 1918,
      image: "assets/images/Carolina Parakeet.png"
    },
    {
      id: "tasmanian-emu",
      commonName: "Tasmanian Emu",
      scientificName: "Dromaius novaehollandiae diemenensis",
      type: "Bird",
      region: "Tasmania",
      habitat: "Open woodland and grassland",
      diet: "Plants, seeds, and insects",
      period: "19th century",
      extinctionCause: "Hunting and habitat conversion",
      shortFact: "This island emu subspecies disappeared quickly after European settlement.",
      category: "Island endemic",
      extinctionYear: 1865,
      image: "assets/images/Tasmanian emu.png"
    },
    {
      id: "west-african-black-rhino",
      commonName: "West African Black Rhinoceros",
      scientificName: "Diceros bicornis longipes",
      type: "Mammal",
      region: "West Africa",
      habitat: "Savanna and dry shrubland",
      diet: "Leaves and woody shrubs",
      period: "21st century",
      extinctionCause: "Poaching and weak protection systems",
      shortFact: "It was officially declared extinct in 2011 after years of severe poaching pressure.",
      category: "Modern extinction",
      extinctionYear: 2011,
      image: "assets/images/West African black rhinoceros.png"
    },
    {
      id: "japanese-sea-lion",
      commonName: "Japanese Sea Lion",
      scientificName: "Zalophus japonicus",
      type: "Marine Mammal",
      region: "Northwest Pacific",
      habitat: "Coastal islands and rocky shores",
      diet: "Fish and squid",
      period: "20th century",
      extinctionCause: "Overhunting and wartime habitat disturbance",
      shortFact: "Large hunting operations in the late 19th and early 20th century drove rapid decline.",
      category: "Marine extinction",
      extinctionYear: 1974,
      image: "assets/images/sea lion.png"
    },
    {
      id: "caribbean-monk-seal",
      commonName: "Caribbean Monk Seal",
      scientificName: "Neomonachus tropicalis",
      type: "Marine Mammal",
      region: "Caribbean Sea and Gulf of Mexico",
      habitat: "Warm coastal waters and sandy islands",
      diet: "Fish and crustaceans",
      period: "20th century",
      extinctionCause: "Commercial hunting and fish stock depletion",
      shortFact: "It was the first seal species to become extinct due to human activity in modern times.",
      category: "Marine extinction",
      extinctionYear: 1952,
      image: "assets/images/Caribbean monk seal.png"
    },
    {
      id: "pinta-island-tortoise",
      commonName: "Pinta Island Tortoise",
      scientificName: "Chelonoidis abingdonii",
      type: "Reptile",
      region: "Galapagos Islands",
      habitat: "Dry island scrubland",
      diet: "Cactus pads, grasses, and herbs",
      period: "21st century",
      extinctionCause: "Overexploitation and introduced species",
      shortFact: "Lonesome George, the last known individual, died in 2012.",
      category: "Island endemic",
      extinctionYear: 2012,
      image: "assets/images/tortoise.png"
    },
    {
      id: "elephant-bird",
      commonName: "Elephant Bird",
      scientificName: "Aepyornis maximus",
      type: "Bird",
      region: "Madagascar",
      habitat: "Forests and marsh edges",
      diet: "Fruits and plant material",
      period: "17th century",
      extinctionCause: "Hunting and habitat pressure",
      shortFact: "Its eggs are among the largest known in the animal kingdom.",
      category: "Island endemic",
      extinctionYear: 1650,
      image: "assets/images/Elephant Bird.png"
    },
    {
      id: "haasts-eagle",
      commonName: "Haast's Eagle",
      scientificName: "Hieraaetus moorei",
      type: "Bird",
      region: "New Zealand",
      habitat: "Forest and alpine zones",
      diet: "Large flightless birds, especially moa",
      period: "15th century",
      extinctionCause: "Prey loss and habitat change",
      shortFact: "It is considered one of the largest eagles to have existed in recent history.",
      category: "Predator extinction",
      extinctionYear: 1445,
      image: "assets/images/Haast's eagle.png"
    },
    {
      id: "irish-elk",
      commonName: "Irish Elk",
      scientificName: "Megaloceros giganteus",
      type: "Mammal",
      region: "Europe and Western Asia",
      habitat: "Open grasslands and woodland edges",
      diet: "Grasses and herbs",
      period: "Late Pleistocene to early Holocene",
      extinctionCause: "Climate change and habitat shift",
      shortFact: "Despite the name, it was not limited to Ireland and was closer to deer than elk.",
      category: "Ice Age megafauna",
      extinctionYear: -7700,
      image: "assets/images/Irish Elk.png"
    },
    {
      id: "megalodon",
      commonName: "Megalodon",
      scientificName: "Otodus megalodon",
      type: "Fish",
      region: "Global oceans",
      habitat: "Warm and temperate seas",
      diet: "Large marine vertebrates",
      period: "Neogene period",
      extinctionCause: "Ocean cooling and prey ecosystem changes",
      shortFact: "Megalodon is known mostly from fossil teeth, some over 15 centimeters long.",
      category: "Prehistoric marine predator",
      extinctionYear: -3600000,
      image: "assets/images/Megalodon.png"
    }
  ];

  document.addEventListener("DOMContentLoaded", function () {
    initSpeciesGallery();
  });

  function initSpeciesGallery() {
    var grid = document.getElementById("speciesGrid");
    if (!grid) {
      return;
    }

    var searchInput = document.getElementById("speciesSearch");
    var typeFilter = document.getElementById("typeFilter");
    var regionFilter = document.getElementById("regionFilter");
    var causeFilter = document.getElementById("causeFilter");
    var sortSelect = document.getElementById("sortSpecies");
    var resetButton = document.getElementById("resetFilters");
    var resultNote = document.getElementById("speciesCount");
    var emptyState = document.getElementById("speciesEmpty");

    var modal = document.getElementById("speciesModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalScientific = document.getElementById("modalScientific");
    var modalImage = document.getElementById("modalImage");
    var modalFacts = document.getElementById("modalFacts");
    var modalClose = document.getElementById("modalClose");

    populateSelect(typeFilter, uniqueValues(extinctSpecies, "type"));
    populateSelect(regionFilter, uniqueValues(extinctSpecies, "region"));
    populateSelect(causeFilter, uniqueValues(extinctSpecies, "extinctionCause"));

    renderSpecies(extinctSpecies);

    searchInput.addEventListener("input", applyFilters);
    typeFilter.addEventListener("change", applyFilters);
    regionFilter.addEventListener("change", applyFilters);
    causeFilter.addEventListener("change", applyFilters);
    sortSelect.addEventListener("change", applyFilters);

    resetButton.addEventListener("click", function () {
      searchInput.value = "";
      typeFilter.value = "all";
      regionFilter.value = "all";
      causeFilter.value = "all";
      sortSelect.value = "name-asc";
      applyFilters();
    });

    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });

    function applyFilters() {
      var query = searchInput.value.trim().toLowerCase();
      var selectedType = typeFilter.value;
      var selectedRegion = regionFilter.value;
      var selectedCause = causeFilter.value;
      var selectedSort = sortSelect.value;

      var filtered = extinctSpecies.filter(function (species) {
        var matchesSearch =
          species.commonName.toLowerCase().includes(query) ||
          species.scientificName.toLowerCase().includes(query);

        var matchesType = selectedType === "all" || species.type === selectedType;
        var matchesRegion = selectedRegion === "all" || species.region === selectedRegion;
        var matchesCause = selectedCause === "all" || species.extinctionCause === selectedCause;

        return matchesSearch && matchesType && matchesRegion && matchesCause;
      });

      filtered = sortSpecies(filtered, selectedSort);
      renderSpecies(filtered);
    }

    function renderSpecies(list) {
      grid.innerHTML = "";

      if (!list.length) {
        emptyState.classList.remove("hidden");
        resultNote.textContent = "0 species shown out of " + extinctSpecies.length + ".";
        return;
      }

      emptyState.classList.add("hidden");
      resultNote.textContent = list.length + " species shown out of " + extinctSpecies.length + ".";

      var fragment = document.createDocumentFragment();

      list.forEach(function (species) {
        var card = document.createElement("article");
        card.className = "species-card";

        card.innerHTML =
          "<div class='species-image'>" +
          "<img loading='lazy' src=\"" + resolveSpeciesImage(species) + "\" alt=\"" + species.commonName + " image\"/>" +
          "</div>" +
          "<div class='species-body'>" +
          "<h3>" + species.commonName + "</h3>" +
          "<p class='scientific'><em>" + species.scientificName + "</em></p>" +
          "<div class='species-meta'>" +
          "<span class='meta-pill'>" + species.type + "</span>" +
          "<span class='meta-pill'>" + species.region + "</span>" +
          "</div>" +
          "<p>" + species.shortFact + "</p>" +
          "<button class='btn btn-secondary species-action' type='button' data-id='" + species.id + "'>View Details</button>" +
          "</div>";

        fragment.appendChild(card);
      });

      grid.appendChild(fragment);

      grid.querySelectorAll(".species-action").forEach(function (button) {
        button.addEventListener("click", function () {
          var speciesId = button.getAttribute("data-id");
          var species = extinctSpecies.find(function (item) {
            return item.id === speciesId;
          });

          if (species) {
            openModal(species);
          }
        });
      });
    }

    function openModal(species) {
      modalTitle.textContent = species.commonName;
      modalScientific.textContent = species.scientificName;
      modalImage.src = resolveSpeciesImage(species);
      modalImage.alt = species.commonName + " image";

      modalFacts.innerHTML =
        "<li><strong>Region:</strong> " + species.region + "</li>" +
        "<li><strong>Habitat:</strong> " + species.habitat + "</li>" +
        "<li><strong>Diet:</strong> " + species.diet + "</li>" +
        "<li><strong>Period:</strong> " + species.period + "</li>" +
        "<li><strong>Cause of Extinction:</strong> " + species.extinctionCause + "</li>" +
        "<li><strong>Fun Fact:</strong> " + species.shortFact + "</li>";

      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }

  function uniqueValues(data, field) {
    return Array.from(
      new Set(
        data.map(function (item) {
          return item[field];
        })
      )
    ).sort(function (a, b) {
      return a.localeCompare(b);
    });
  }

  function populateSelect(selectElement, values) {
    values.forEach(function (value) {
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      selectElement.appendChild(option);
    });
  }

  function sortSpecies(list, sortType) {
    var sorted = list.slice();

    if (sortType === "name-desc") {
      sorted.sort(function (a, b) {
        return b.commonName.localeCompare(a.commonName);
      });
    } else if (sortType === "recent-first") {
      sorted.sort(function (a, b) {
        return b.extinctionYear - a.extinctionYear;
      });
    } else if (sortType === "oldest-first") {
      sorted.sort(function (a, b) {
        return a.extinctionYear - b.extinctionYear;
      });
    } else {
      sorted.sort(function (a, b) {
        return a.commonName.localeCompare(b.commonName);
      });
    }

    return sorted;
  }
})();

