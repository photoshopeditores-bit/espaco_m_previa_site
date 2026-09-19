export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description?: string;
  capacity?: string;
  highlights?: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'cenografia' | 'corporativo' | 'celebracoes' | 'palco';
  categoryLabel: string;
  imageUrl: string;
  description?: string;
  author?: string;
  googleMapsUrl?: string;
  aspectRatio?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role?: string;
  companyOrEvent: string;
  rating: number;
  timeAgo: string;
  avatarUrl?: string;
  comment: string;
  source: string;
  isLocalGuide?: boolean;
  reviewCount?: number;
  userInitial?: string;
}
