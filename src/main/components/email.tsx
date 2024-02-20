import React from 'react';
import '../Main.scss'


const EmailLink: React.FC<{ email: string }> = ({ email }) => {
  const handleClick = () => {
    const params = new URLSearchParams();
    params.append('to', email);
    params.append('subject', 'Тема письма');
    params.append('body', 'Текст письма');

    const mailtoLink = `mailto:${email}?${params.toString()}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <a className="sideLeftTwoMail" href="#" onClick={handleClick}>
      {email}
    </a>
  );
};

export default EmailLink;