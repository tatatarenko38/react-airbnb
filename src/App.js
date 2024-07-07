import Page from "./component/page";
import Header from "./component/header";
import Title from "./component/title";
import Photo from "./component/photo";
import Price from "./component/price";
import RoomList from "./component/room-list";
import Description from "./component/description";
import PropertyDetails from "./component/property-details";
import Amenities from "./component/amenities";
import ContactInfo from "./component/contact-info";
import AdditionalProperties from "./component/additional-properties";
import GuestReviewsList from "./component/guest-reviews";
import AttractionsList from "./component/nearby-attractions";

function App() {
  const data = {
    listing_name: "Іст-Сайд Біл",
    reviews_summary: {
      average_rating: 4.9,
      total_reviews: 190,
    },
    location: {
      city: "Остін, Техас",
      country: "Сполучені Штати",
    },
    superhost: true,

    image: "https://picsum.photos/1000/1000",

    price: {
      original_price: 308,
      discounted_price: 218,
      currency: "$",
      cleaning_fee: 90,
      service_fee: 200,
    },
    availability: {
      checkin_date: "9/6/2023",
      checkout_date: "9/11/2023",
    },

    roomTypes: [
      {
        id: 5313,
        type: "Deluxe Room",
        pricePerNight: 300,
        currency: "$",
        capacity: 2,
      },
      {
        id: 6264,
        type: "Suite",
        pricePerNight: 500,
        currency: "$",
        capacity: 4,
      },
      {
        id: 7332,
        type: "Presidential",
        pricePerNight: 1000,
        currency: "$",
        capacity: 6,
      },
    ],

    description:
      "Насолоджуйтеся цим чистим, сучасним котеджем, розташованим у затишному, але зручному районі Центрально-Східного Остіна. Натхненний японськими чайними будинками, цей котедж на задньому дворі забезпечує легкий доступ до місць проведення SXSW, фестивалю ACL, центру міста, чудових ресторанів та громадського транспорту, а також пропонує спокійний відпочинок для відпочинку та зарядки.",

    property_details: {
      guests: 2,
      bedrooms: 1,
      beds: 1,
      baths: 1,
    },

    neighborhood_info: "Район чарівний, веселий, безпечний і милий...",

    amenities: {
      hasPool: true,
      hasGym: false,
      hasFreeBreakfast: true,
      hasFreeWiFi: true,
      hasParking: false,
      hasPetsAllowed: false,
      hasAirportShuttle: true,
      hasConciergeService: true,
      hasRoomService: false,
      hasChildFriendly: true,
    },

    contact_info: {
      name: "Kerthy",
      image: "https://picsum.photos/80/80",
      response_rate: 100,
      response_time: "Протягом години",
      info: "Я кінорежисерка і телевізійний продюсер Остіна-Брукліна, якого можна знайти на велосипеді до Фермерського ринку...",
      phone: "+123-456-7890",
    },

    additional_properties: {
      house_rules:
        "Паління та домашні тварини заборонені. Тиша з 22:00 до 7:00",
      cancellation_policy:
        "Гнучка політика скасування з повним поверненням коштів у разі скасування за 7 днів до заїзду.",
      local_transportation:
        "Громадські автобуси та таксі в межах пішої досяжності.",
      host_languages: "Англійська,іспанська",
      special_offers: "Знижка 10% при бронюванні від 7 ночей",
      check_in_instructions:
        "Час реєстрації - 15:00. Будь ласка, зв'яжіться з нами заздалегідь, повідомте орієнтовний час свого прибуття.",
    },

    guestReviews: [
      {
        id: 43454,
        guestName: "Alice Johnson",
        rating: 5,
        review:
          "Дивовижний досвід! Персонал був дуже доброзичливим, а зручності були першокласними.",
      },
      {
        id: 75543,
        guestName: "Bob Smith",
        rating: 4,
        review:
          "Чудове розташування та гарні краєвиди. Проте ціни в ресторані були трохи завищені.",
      },
      {
        id: 55431,
        guestName: "Eve Williams",
        rating: 5,
        review:
          "Дуже сподобалися спа-процедури. Це було розслаблююче та відновлююче перебування.",
      },
    ],

    nearbyAttractions: [
      {
        id: 453,
        name: "Кришталевий пляж",
        link: "www.test.com",
      },
      {
        id: 741,
        name: "Пішохідні стежки тропічних лісів",
        link: "www.test.com",
      },
      {
        id: 422,
        name: "Острів водоспадів",
        link: "www.test.com",
      },
      {
        id: 876,
        name: "Культурні екскурсії селом",
        link: "www.test.com",
      },
    ],
  };

  return (
    <Page>
      <Header />
      <Title
        title={data.listing_name}
        rating={data.reviews_summary.average_rating}
        review={data.reviews_summary.total_reviews}
        city={data.location.city}
        country={data.location.country}
        superhost={data.superhost}
      />
      <Photo src={data.image} name={data.listing_name} />
      <Price
        price={data.price.original_price}
        discount={data.price.discounted_price}
        currency={data.price.currency}
        cleaning={data.price.cleaning_fee}
        service={data.price.service_fee}
        checkin={data.availability.checkin_date}
        checkout={data.availability.checkout_date}
      />
      <RoomList list={data.roomTypes} />
      <Description title="Опис">{data.description}</Description>
      <PropertyDetails
        guests={data.property_details.guests}
        bedrooms={data.property_details.bedrooms}
        beds={data.property_details.beds}
        baths={data.property_details.baths}
      />
      {/* або так передати children */}
      <Description title="Про сусідів" children={data.neighborhood_info} />

      <Amenities
        hasPool={data.amenities.hasPool}
        hasGym={data.amenities.hasGym}
        hasFreeBreakfast={data.amenities.hasFreeBreakfast}
        hasFreeWiFi={data.amenities.hasFreeWiFi}
        hasParking={data.amenities.hasParking}
        hasPetsAllowed={data.amenities.hasPetsAllowed}
        hasAirportShuttle={data.amenities.hasAirportShuttle}
        hasConciergeService={data.amenities.hasConciergeService}
        hasRoomService={data.amenities.hasRoomService}
        hasChildFriendly={data.amenities.hasChildFriendly}
      />
      <ContactInfo
        name={data.contact_info.name}
        image={data.contact_info.image}
        response_rate={data.contact_info.response_rate}
        response_time={data.contact_info.response_time}
        info={data.contact_info.info}
        phone={data.contact_info.phone}
      />

      <AdditionalProperties
        house_rules={data.additional_properties.house_rules}
        cancellation_policy={data.additional_properties.cancellation_policy}
        local_transportation={data.additional_properties.local_transportation}
        host_languages={data.additional_properties.host_languages}
        special_offers={data.additional_properties.special_offers}
        check_in_instructions={data.additional_properties.check_in_instructions}
      />

      <GuestReviewsList list={data.guestReviews} />
      <AttractionsList list={data.nearbyAttractions} />
    </Page>
  );
}

export default App;
