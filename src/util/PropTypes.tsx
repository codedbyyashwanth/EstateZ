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

export type ValuedClient = {
      year: number;
      domain: string;
      category: string;
      testimonial: string;
};

export type PriceRange = {
      range: number;
      minPrice: number;
      maxPrice: number;
};

export type PropertySizeRange = {
      range: number;
      minSize: number;
      maxSize: number;
};

export type InputType = {
      label: string;
      placeholder: string;
};

export type DropdownInputType = {
      label: string;
      placeholder: string;
      data: string[];
};