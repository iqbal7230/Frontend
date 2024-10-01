export const data = {
  navItems: [
    { name: 'Dashboard', path: '/', icon: '🏠' },
    { name: 'My Events', path: '/my-events', icon: '📅' },
    { name: 'My Tickets', path: '/my-tickets', icon: '🎟' },
    { name: 'All Events', path: '/all-events', icon: '📆' },
    { name: 'Get NFT Details', path: '/nft-details', icon: '💰' },
    { name: 'Ticket Validation', path: '/ticket-validation', icon: '🔑' },
    { name: 'Create New Event', path: '/new-Event', icon: '➕' },

  ],
  userProfile: {
    name: 'Iqbal Ansari',
    email: 'iqbalply@gmail.com',
    profileImage: 'img/profile.jpg', 
  },

  myEvents: [
    {
      id: 1,
      name: 'Rock Concert',
      date: 'October 5, 2024',
      description: 'A high-energy rock concert featuring top artists from around the world.',
    },
    {
      id: 2,
      name: 'Jazz Night',
      date: 'October 15, 2024',
      description: 'An evening of smooth jazz and fine dining under the stars.',
    },
  ],

  myTickets: [
    {
      id: 1,
      ticketId: 'TKT001',
      eventName: 'Rock Concert',
      date: 'October 5, 2024',
    },
    {
      id: 2,
      ticketId: 'TKT002',
      eventName: 'Jazz Night',
      date: 'October 15, 2024',
    },
  ],

  allEvents: [
    {
      id: 1,
      name: 'Rock Concert',
      date: '2024-10-05',
      venue: 'Stadium Arena, Mumbai',
      price: 1500,
      image: 'img/1 (2).jpg', 
      description: 'A high-energy rock concert featuring top artists from around the world.',
    },
    {
      id: 2,
      name: 'Jazz Night',
      date: '2024-10-15',
      venue: 'The Jazz Club, Delhi',
      price: 1200,
      image: 'img/2.jpeg',
      description: 'An evening of smooth jazz and fine dining under the stars.',
    },
    {
      id: 3,
      name: 'EDM Festival',
      date: '2024-11-01',
      venue: 'Beach Festival Grounds, Goa',
      price: 2500,
      image: 'img/3.webp',
      description: 'An electrifying experience with top EDM DJs from around the globe.',
    },
    {
      id: 4,
      name: 'Pop Music Fest',
      date: '2024-10-20',
      venue: 'Convention Center, Bangalore',
      price: 1800,
      image: 'img/4.jpg',
      description: 'A night of pop music with performances from leading pop artists.',
    },
  ],
};
