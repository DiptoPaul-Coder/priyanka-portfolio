
import { useEffect, useRef } from 'react';
import ContactForm from '../ui/ContactForm';
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "paul.bmb011@gmail.com",
      link: "mailto:paul.bmb011@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+8801707617471",
      link: "tel:+8801707617471"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Google Scholar",
      value: "View Profile",
      link: "https://scholar.google.com/citations?user=yVVsigoAAAAJ&hl=en"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect with Me",
      link: "https://www.linkedin.com/in/priyanka-paul-41b95b284/"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-accent">
      <div className="section-container">
        <h2 className="section-title text-center">Contact</h2>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start reveal-animation">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing research collaborations, academic opportunities, or answering any questions about my work. Feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 md:p-8">
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
      
      <footer className="mt-16 border-t border-gray-200 pt-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://i.ibb.co.com/0sVCXL9/download.jpg" alt="Priyanka Paul" />
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <h3 className="font-medium text-lg">Priyanka Paul</h3>
                <p className="text-gray-600 text-sm">Biochemistry & Molecular Biology Researcher</p>
              </div>
            </div>
            
            <div className="text-center md:text-left text-gray-600 text-sm">
              © {new Date().getFullYear()} Priyanka Paul. All rights reserved.
            </div>
            
            <div className="text-right text-gray-600 text-sm">
              <p>Research Interests: Biochemistry, Molecular Biology, Bioinformatics</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
