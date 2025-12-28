export const cards = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        collectionId: 83637,
        title: "Burger",
        description: "Satisfy your cravings with these fresh and flavoursome burgers.",
        imageId: "COLLECTIONS/IMAGES/MERCH/2024/7/2/6f256b56-e319-488b-8003-9ccca21d4f14_pic",
        aspectRatio: 3.44,
        cta: {
          link: "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger,burger,layout_Burger,ads_pc_burger",
          type: "collectionv2",
        },
        type: "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        count: "45 restaurants",
        navBarConfig: "",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        sortConfigs: [
          { key: "relevance", title: "Relevance (Default)", selected: true, defaultSelection: true },
          { key: "deliveryTimeAsc", title: "Delivery Time" },
          { key: "modelBasedRatingDesc", title: "Rating" },
        ],
        restaurantCount: 45,
        widgetId: "inlineFacetFilter",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: 952001,
          name: "Burger Farm",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/8/25/56ad0963-ac56-4c32-8b99-3f36f6c03664_fef437b4-cbcb-497f-9f38-39ed00770bbe.jpg",
          locality: "E4 ARERA COLONY",
          areaName: "E4 ARERA COLONY",
          costForTwo: "₹250 for two",
          cuisines: "American",
          avgRating: 4.6,
          sla: { deliveryTime: 42 },
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: 425509,
          name: "KFC",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/0149bc44-3f63-452b-95fa-948e3d0a7ad6_425509.JPG",
          locality: "BHEL",
          areaName: "BHEL",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
          avgRating: 4.3,
          sla: { deliveryTime: 25 },
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: 949894,
          name: "Pizza Hub",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/7/d05eeeb3-fa16-4329-8c42-9ca669f249f0_0315d461-72bf-4ebd-9f66-fb53f3ce0eed.jpg",
          locality: "A Sector",
          areaName: "Piplani",
          costForTwo: "₹200 for two",
          cuisines: ["Pizzas", "Fast Food", "Burgers", "Cafe"],
          avgRating: 4.5,
          sla: { deliveryTime: 31 },
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: 1224934,
          name: "Big Bowl",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/8/8781420b-de00-4da5-b590-b65fadafd1a2_1224934.jpg",
          locality: "Rani Kamlapati (Habibganj) Railway Station",
          areaName: "Bansal Mall",
          costForTwo: "₹250 for two",
          cuisines: ["Chinese", "Tibetan", "Desserts"],
          avgRating: 4.6,
          sla: { deliveryTime: 53 },
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
    },
  },
];

export const restaurants = cards
  .filter((c) => c?.card?.card?.["@type"]?.includes("Restaurant"))
  .map((c) => {
    const info = c.card.card.info || {};
    const cloudinaryId = info.cloudinaryImageId || info.imageId || "";
    const image = cloudinaryId
      ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryId}`
      : "";

    return {
      id: info.id,
      name: info.name,
      areaName: info.areaName || info.locality,
      locality: info.locality,
      costForTwo: info.costForTwo,
      cuisines: Array.isArray(info.cuisines) ? info.cuisines : info.cuisines ? [info.cuisines] : [],
      avgRating: info.avgRating || info.avgRatingString,
      deliveryTime: info.sla?.deliveryTime,
      image,
      raw: info,
    };
  });

export default restaurants;
