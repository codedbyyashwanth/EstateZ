import { RealEstateProperty, Testimonial, FAQ, ValuedClient } from "./PropTypes";
    
const realEstateProperties: RealEstateProperty[] = [
      {
            name: "Spacious Villa",
            description: "Elegant villa with panoramic views, large garden, and a private pool.",
            bedrooms: 5,
            bathrooms: 4,
            priceUSD: "$1,200,000",
            imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
            name: "Downtown Penthouse",
            description: "Luxurious penthouse in the city center, featuring modern design and exclusive amenities.",
            bedrooms: 3,
            bathrooms: 3,
            priceUSD: "$900,000",
            imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
            name: "Suburban Family Home",
            description: "Charming family home in a quiet suburban neighborhood with a spacious backyard.",
            bedrooms: 4,
            bathrooms: 2,
            priceUSD: "$500,000",
            imageUrl: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
            name: "Beachfront Condo",
            description: "Contemporary condo with direct beach access, offering stunning ocean views.",
            bedrooms: 2,
            bathrooms: 2,
            priceUSD: "$700,000",
            imageUrl: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
            name: "Rustic Cabin",
            description: "Cozy cabin surrounded by nature, ideal for those seeking a peaceful retreat.",
            bedrooms: 1,
            bathrooms: 1,
            priceUSD: "$300,000",
            imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
            name: "Urban Loft",
            description: "Industrial-style loft in the heart of the city, featuring open spaces and exposed brick walls.",
            bedrooms: 2,
            bathrooms: 1,
            priceUSD: "$450,000",
            imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
            name: "Mountain Retreat",
            description: "Secluded mountain retreat with breathtaking views and hiking trails nearby.",
            bedrooms: 3,
            bathrooms: 2,
            priceUSD: "$800,000",
            imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
            name: "Golf Course Estate",
            description: "Estate overlooking a golf course, complete with a private putting green and golf cart garage.",
            bedrooms: 6,
            bathrooms: 5,
            priceUSD: "$1,500,000",
            imageUrl: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
            name: "City View Apartment",
            description: "Modern apartment with city skyline views, located in a vibrant and trendy neighborhood.",
            bedrooms: 2,
            bathrooms: 2,
            priceUSD: "$600,000",
            imageUrl: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80&w=1765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
];

const testimonials: Testimonial[] = [
      {
            rating: 5,
            title: "Exceptional Service!",
            description: "I had an amazing experience working with this real estate agency. Their professionalism and attention to detail made the process smooth and stress-free.",
            testimonialName: "John Doe",
            profilePicUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "New York",
                  country: "USA",
            },
      },
      {
            rating: 4,
            title: "Dream Home Found",
            description: "Thanks to the expertise of the team, I found my dream home in a great neighborhood. The entire journey was enjoyable, and I highly recommend their services.",
            testimonialName: "Alice Johnson",
            profilePicUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "Los Angeles",
                  country: "USA",
            },
      },
      {
            rating: 4,
            title: "Responsive and Professional",
            description: "The realtors were highly responsive and professional throughout the process. They addressed all my concerns promptly, making the purchase hassle-free.",
            testimonialName: "Michael Smith",
            profilePicUrl: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "London",
                  country: "UK",
            },
      },
      {
            rating: 5,
            title: "Fantastic Experience",
            description: "A fantastic experience from start to finish. The team went above and beyond to ensure I found the perfect property. I couldn't be happier!",
            testimonialName: "Sophie Turner",
            profilePicUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "Sydney",
                  country: "Australia",
            },
      },
      {
            rating: 4,
            title: "Great Communication",
            description: "Communication was excellent throughout the home-buying process. I was kept informed at every stage, and the team was always available to answer my questions.",
            testimonialName: "David Rodriguez",
            profilePicUrl: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "Toronto",
                  country: "Canada",
            },
      },
      {
            rating: 4,
            title: "Smooth Transaction",
            description: "The entire transaction was smooth and efficient. The real estate experts guided me through each step, ensuring a hassle-free buying experience.",
            testimonialName: "Emily White",
            profilePicUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "Berlin",
                  country: "Germany",
            },
      },
      {
            rating: 5,
            title: "Top-Notch Service",
            description: "Top-notch service from a dedicated team. They listened to my preferences and found me the perfect home. I highly recommend their expertise.",
            testimonialName: "Daniel Kim",
            profilePicUrl: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "Seoul",
                  country: "North Korea",
            },
      },
      {
            rating: 4,
            title: "Excellent Negotiation Skills",
            description: "The real estate agents demonstrated excellent negotiation skills, securing a favorable deal for my property. I'm extremely satisfied with their services.",
            testimonialName: "Maria Rodriguez",
            profilePicUrl: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "Barcelona",
                  country: "Spain",
            },
      },
      {
            rating: 4,
            title: "Reliable and Trustworthy",
            description: "Reliable and trustworthy professionals who guided me through the home-buying process. I appreciate their honesty and commitment to customer satisfaction.",
            testimonialName: "James Thompson",
            profilePicUrl: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
                  city: "Tokyo",
                  country: "Japan",
            },
      },
      {
            rating: 5,
            title: "Outstanding Support",
            description: "The support provided by the team was outstanding. They guided me through every step of the selling process, ensuring a seamless experience.",
            testimonialName: "Emma Davis",
            profilePicUrl: "https://images.unsplash.com/photo-1528515038361-c1c059a6eff2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
              city: "Paris",
              country: "France",
            },
      },
      {
            rating: 4.5,
            title: "Efficient and Friendly",
            description: "Efficient and friendly service from start to finish. The team understood my preferences and found a property that exceeded my expectations.",
            testimonialName: "Ryan Johnson",
            profilePicUrl: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
              city: "Melbourne",
              country: "Australia",
            },
      },
      {
            rating: 4,
            title: "Relocation Made Easy",
            description: "Relocating to a new city was made easy with the help of this real estate agency. They provided valuable insights and support throughout the process.",
            testimonialName: "Sophia Lee",
            profilePicUrl: "https://images.unsplash.com/photo-1498798821241-1f327af804fe?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            location: {
              city: "Singapore",
              country: "Singapore",
            },
      }
];

const realEstateFAQs: FAQ[] = [
      {
        question: "How can I determine the right time to buy a property?",
        answer: "The right time to buy a property depends on various factors, including market conditions, interest rates, and your personal financial situation. It's advisable to consult with a real estate professional to make an informed decision.",
      },
      {
        question: "What is the importance of a home inspection?",
        answer: "A home inspection is crucial as it helps identify potential issues with the property. It provides buyers with a comprehensive understanding of the property's condition and can be used to negotiate repairs or adjustments to the sale price.",
      },
      {
        question: "How does the mortgage approval process work?",
        answer: "The mortgage approval process involves a thorough evaluation of your financial history, credit score, and debt-to-income ratio. Lenders assess your ability to repay the loan and determine the loan amount and interest rate based on this information.",
      },
      {
        question: "What is the significance of location when buying real estate?",
        answer: "Location is a key factor in real estate. It affects property value, accessibility, and potential for appreciation. Consider factors such as proximity to amenities, schools, and transportation when evaluating a property.",
      },
      {
        question: "Are there tax benefits to owning real estate?",
        answer: "Yes, there are tax benefits to owning real estate. Homeowners may be eligible for deductions on mortgage interest, property taxes, and certain home-related expenses. Consult with a tax professional for personalized advice.",
      },
      {
        question: "How does the closing process work in a real estate transaction?",
        answer: "The closing process involves finalizing the real estate transaction. It includes signing legal documents, transferring funds, and officially transferring ownership. Closing typically takes place at a title company or with a real estate attorney.",
      },
];

const valuedClients: ValuedClient[] = [
      {
        year: 2018,
        domain: "Corporation Real Estate",
        category: "Luxury Home Department",
        testimonial: "Working with this real estate agency has been a game-changer for our Luxury Home Department. Their expertise and dedication to client satisfaction have exceeded our expectations.",
      },
      {
        year: 2019,
        domain: "Investment Holdings",
        category: "Commercial Properties",
        testimonial: "Our partnership with this real estate firm in managing and expanding our commercial property portfolio has been instrumental in our success. Their strategic insights are invaluable.",
      },
      {
        year: 2020,
        domain: "Residential Development Group",
        category: "New Housing Projects",
        testimonial: "The real estate experts played a pivotal role in the success of our new housing projects. Their market analysis and innovative solutions have set our developments apart in the industry.",
      },
      {
        year: 2021,
        domain: "Hospitality Enterprises",
        category: "Resort Properties",
        testimonial: "As a client in the hospitality sector, we appreciate the real estate agency's commitment to finding picturesque resort properties. Their attention to detail aligns perfectly with our brand standards.",
      },
      {
        year: 2022,
        domain: "Technology Park Management",
        category: "Corporate Real Estate",
        testimonial: "Our experience with this real estate agency in managing our technology park's corporate real estate has been exceptional. Their proactive approach and efficiency have significantly enhanced our operations.",
      },
      {
        year: 2023,
        domain: "Global Retail Chains",
        category: "Retail Space Acquisition",
        testimonial: "Securing retail spaces across the globe has been seamless with the support of this real estate team. Their global network and market insights have been crucial to our expansion strategy.",
      },
    ];

export {
      realEstateProperties,
      testimonials,
      realEstateFAQs,
      valuedClients
};