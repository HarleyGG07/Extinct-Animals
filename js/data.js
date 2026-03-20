(function () {
  "use strict";

  function buildAssetUrl(path) {
    return path
      .split("/")
      .map(function (segment) {
        return encodeURIComponent(segment);
      })
      .join("/");
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
          "<img loading='lazy' src=\"" + buildAssetUrl(species.image) + "\" alt=\"" + species.commonName + " image\"/>" +
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
      modalImage.src = buildAssetUrl(species.image);
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

