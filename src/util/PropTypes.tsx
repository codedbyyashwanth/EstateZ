export type HeadingPropes = {
      heading: string;
      text: string;
      buttonText: string;
}

export type RealEstateProperty = {
      name: string;
      description: string;
      bedrooms: number;
      bathrooms: number;
      priceUSD: string;
      imageUrl: string;
};

export type Testimonial = {
      rating: number;
      title: string;
      description: string;
      testimonialName: string;
      profilePicUrl: string;
      location: {
            city: string;
            country: string;
      };
};

export type FAQ = {
      question: string;
      answer: string;
};