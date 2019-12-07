const mapMemberToGuide = (arr) => {
  const cardImages = ['autumn.jpg', 'huskey.jpg', 'midnight.jpg', 'santa.jpg', 'winter.jpg'];

  return arr.map(member => ({
    avatar: member.profileimage || 'no-avatar.png',
    img: cardImages[Math.floor(Math.random() * cardImages.length)],
    info: 'We are here to help',
    personInfo: {
      id: member.memberID,
      firstname: member.firstname,
      lastname: member.lastname,
      birthdate: member.birthdate || 'N/A',
      street: `${member.street}`,
      city: member.city,
      zip: member.zip,
      phone: member.phone || 'N/A',
      email: member.email,
      role: member.role,
      driverslicense: member.driverslicense || 'N/A',
    },
  }));
};

export default mapMemberToGuide;
