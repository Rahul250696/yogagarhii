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
        name: "Gurpreet Kaur Dhou",
        location: "Canada",
        avatar: "G",
        rating: 5,
        date: "1 week ago",
        text: "YogaGhari is truly authentic and deeply rooted in the real essence of yoga. From the very beginning, I felt seen and supported as a person, not treated as just another number in a group. The school offers an incredible amount of support before the training throughout the training and beyond. The teachers genuinely care about your growth, not only as a practitioner but especially as a yoga teacher. They take the time to guide you, encourage you, and help you build confidence in your own voice and teaching style.",
    },
    {
        name: "Ilksen Doğan",
        location: "Turkey",
        avatar: "I",
        rating: 5,
        date: "2 months ago",
        text: "Sachin is hands down one of the most knowledgeable yoga teachers I have been taught by. Despite me being an absolute beginner at the time, he was nothing but patient and encouraging which I am forever grateful for. Through this teaching I was able to confidently understand the foundations of yoga asana alignment and build on my practice in a far more effective way.",
    },
    {
        name: "Aleksandra Dyachenko",
        location: "Russia",
        avatar: "A",
        rating: 5,
        date: "2 months ago",
        text: "I completed my 200-hour yoga teacher training in Bali, and it was truly magical. 🌺 The knowledge I gained was so deep and authentic — something you can genuinely feel in every class. But what really made the experience special was the teachers. They are not just instructors; they are real mentors who teach from the heart with such kindness and wisdom. The connection between students and teachers felt so supportive and genuine, like being part of a big, warm family.",
    },
    {
        name: "Amy Letourneau",
        location: "Canada",
        avatar: "A",
        rating: 5,
        date: "3 months ago",
        text: "Xachin is such an amazing teacher and human. He has a perfect way of explaining things in a digestible way while simultaneously blowing your mind, opening up your perspectives and inspiring you all at once. The training I did here in Bali was the start of a beautiful yoga Journey, which now has lead me to be confident enough to teach in multiple countries around the world and share these beautiful teachings.",
    },
    {
        name: "Lisa Beltman",
        location: "Germany",
        avatar: "L",
        rating: 5,
        date: "3 months ago",
        text: "I really appreciate Sachin Ji’s calm, friendly, and welcoming energy. He is knowledgeable and takes the time to guide each student with care. His classes are structured in such a way that you find yourself doing more than you thought you could. It’s truly inspiring to learn from Sachin Ji. If you wish to deepen your understanding of yoga both in terms of asanas and spirituality then I wholeheartedly recommend this school.",
    },
    {
        name: "Nicole Drake",
        location: "Australia",
        avatar: "N",
        rating: 5,
        date: "2 months ago",
        text: "Sachin’s instruction helped my practice and asana skills develop beyond what I believed I could achieve. I learned the traditional way to practice yog with his help, and Sanskrit history and ancient Hinduism were woven into every class. His extensive knowledge in anatomy, traditional practice, and alignment truly helped me reach a practice where I am confident in my body and my own knowledge which was imparted to me.",
    },
];
