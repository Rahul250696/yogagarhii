// Google Reviews Data - Centralized source of truth
// This data should be used across all components displaying Google reviews

export interface GoogleReview {
    name: string;
    location: string;
    avatar: string;
    rating: number;
    date: string;
    text: string;
}

export const googleReviews: GoogleReview[] = [
    {
        name: "Anshika Chauhan.",
        location: "India",
        avatar: "A",
        rating: 5,
        date: "3 month ago",
        text: "The teachers at YogaGarhi were truly exceptional deeply knowledgeable, passionate, and authentic in their approach. Each one carried unique wisdom, blending ancient philosophy with modern understanding, and guided us with patience, clarity, and genuine care. Their teaching, especially the Shiv Shakti Sadhana method, was transformative not only strengthening the body but also awakening a deeper connection with breath, energy, and spirit.",
    },
    {
        name: "Viral Ashar",
        location: "India",
        avatar: "V",
        rating: 5,
        date: "2 months ago",
        text: "I had the profound privilege of learning Ashtang Yoga under the guidance of Sachin Sir in the peaceful environment of Rishikesh. His impact on my yoga journey has been transformative.From the very beginning, Sir's teaching methodologies were perfectly structured, helping me not just memorize poses, but genuinely understand the whole concept of yoga at its core.",
    },
    {
        name: "Sandeep Sandeep",
        location: "India",
        avatar: "S",
        rating: 5,
        date: "3 months ago",
        text: "Such a wonderful Experience with YogaGarhi. If you are searching for a yoga teacher training that is not just a course but a complete transformation of your life,your soul I can't recommend YogaGarhi enough.I am equally grateful to Sachin ji whose guidance in Pranayama, Meditation, Hatha, and Ashtanga Yoga brought me so much balance. Their patience and wisdom created the perfect space for discipline, growth, and inner stillness.Thank you so much Sachin ji. 🙏🏻",
    },
    {
        name: "Anchal Dhiman",
        location: "India",
        avatar: "A",
        rating: 5,
        date: "2 month ago",
        text: "200-hour yoga training in Bali was truly a life-changing and soulful journey. The place was surrounded by nature, filled with peace and divine energy. The accommodation was cozy and clean, and the food was nourishing, sattvic, and full of love.The teachers were incredible — knowledgeable, kind, and deeply spiritual. Especially Teacher Sachin Ji , whose wisdom and presence inspired me to experience yoga beyond just the body as a path of awareness, balance, and devotion.",
    },
    {
        name: "Deep Srivastava",
        location: "India",
        avatar: "D",
        rating: 5,
        date: "2 months ago",
        text: "I had an amazing experience at Yogagarhi! The teachers were incredibly knowledgeable, supportive, and truly dedicated to each student's growth. What I loved the most was that our group was small — that's the best part of our YTTC! We received very personal attention, and it really helped deepen my understanding and practice of yoga. The energy, the environment, and the community made it a truly transformative journey. Highly recommended to anyone looking for authentic yoga training in Bali! 🙏✨",
    },
    {
        name: "Prerna Rai",
        location: "India",
        avatar: "P",
        rating: 5,
        date: "2 months ago",
        text: "MY experience has been extremely transformative. So grateful to choose this schoo.THE LEAD TEACHER SACHIN JI IS THE BEST YOGA TEACHER !🙏I did my 200 hr ttc from him. He is super experienced and supportive , nothing seems impossible with his years of experience and learning from him gives you deep knowledge of anatomy and growth in the practice.Highly recommend training from THIS SCHOOL IN BALI. In my experience, It's truly the best school to be trained from!",
    },
];
