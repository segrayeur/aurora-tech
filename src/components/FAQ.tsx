import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const FAQ = () => {
  const faqData = [
    {
      category: "Qui sommes-nous ?",
      questions: [
        {
          question: "Qu'est-ce qu'Aurora Tech ?",
          answer: "Aurora Tech est une entreprise ivoirienne basée à Abidjan, spécialisée dans les solutions numériques innovantes. Nous développons des sites web, applications mobiles et logiciels sur mesure pour aider les entreprises et entrepreneurs à réussir leur transformation digitale."
        },
        {
          question: "Qui est le fondateur d'Aurora Tech ?",
          answer: "Le fondateur est KOUASSI JEAN PAUL CEDRIC J, également connu sous le pseudonyme SEGRAYEUR. Expert en solutions numériques, il a créé Aurora Tech pour propulser le digital en Côte d'Ivoire et en Afrique de l'Ouest."
        }
      ]
    },
    {
      category: "Nos produits et services",
      questions: [
        {
          question: "Quels services propose Aurora Tech ?",
          answer: "Nous proposons :\n• Développement Web : sites vitrines, e-commerce, landing pages\n• Applications mobiles et SaaS : iOS, Android et Web\n• Logiciels sur mesure : Web, bureau (Windev, Python, Java, natif)\n• Conception graphique : logos, flyers, affiches\n• Factures proforma et bons de livraison : génération automatisée\n• Formation en IA pour les débutants\n• Formation pack office (Word, Excel, etc.)\n• Installation de systèmes Windows\n• Montage vidéo et post-production"
        },
        {
          question: "Quels sont vos produits phares ?",
          answer: "Nos solutions clés incluent :\n• WEÏLI : gestion et ventes pour entreprises\n• FileCed : stockage et sauvegarde sécurisée de documents\n• QuickJob CI : plateforme de recherche d'emplois"
        },
        {
          question: "À qui s'adressent vos produits et services ?",
          answer: "Nos solutions sont adaptées pour :\n• PME, Startups\n• Grandes entreprises et administrations\n• Écoles et institutions\n• TPE et commerces"
        }
      ]
    },
    {
      category: "Fonctionnement de nos produits phares",
      questions: [
        {
          question: "Comment fonctionne WEÏLI ?",
          answer: "WEÏLI permet de créer un site web, gérer vos ventes en ligne, et suivre vos opérations en temps réel. Il est adapté aux PME et startups souhaitant digitaliser leurs ventes et services."
        },
        {
          question: "Comment fonctionne FileCed ?",
          answer: "FileCed offre un espace sécurisé pour stocker vos documents importants, accessible depuis votre ordinateur ou smartphone. Il est idéal pour les entreprises souhaitant centraliser leurs fichiers et sauvegardes."
        },
        {
          question: "Comment fonctionne QuickJob CI ?",
          answer: "QuickJob CI connecte les candidats et les entreprises en Côte d'Ivoire. Les utilisateurs peuvent postuler à des offres d'emploi locales et recevoir des notifications personnalisées."
        }
      ]
    },
    {
      category: "Contact et assistance",
      questions: [
        {
          question: "Comment contacter Aurora Tech ?",
          answer: "Vous pouvez nous joindre :\n• Téléphone : +225 0565868786 / +225 0778518902\n• E-mails : auroratech2222@gmail.com / auroratech@tutamail.com\n• Adresse : Cocody Riviera 2, Abidjan, Côte d'Ivoire\n• Ou via notre formulaire de contact sur le site."
        },
        {
          question: "Comment demander un devis ou un service personnalisé ?",
          answer: "Cliquez sur « Demander un devis gratuit » sur notre site, remplissez le formulaire et précisez vos besoins. Nous vous répondrons rapidement avec une solution adaptée."
        },
        {
          question: "Proposez-vous un support technique ?",
          answer: "Oui, nous assurons un support complet pour nos solutions logicielles et applications mobiles. Contactez-nous par téléphone ou e-mail pour toute assistance."
        }
      ]
    },
    {
      category: "Sécurité et fiabilité",
      questions: [
        {
          question: "Mes données sont-elles sécurisées ?",
          answer: "Absolument. Tous nos services respectent les standards internationaux de sécurité numérique. FileCed et nos applications sont conçus pour protéger vos informations sensibles."
        },
        {
          question: "Vos solutions sont-elles fiables ?",
          answer: "Oui. Chaque projet bénéficie de notre expertise technique et de tests rigoureux pour garantir des livrables robustes et durables."
        }
      ]
    },
    {
      category: "Divers",
      questions: [
        {
          question: "Quels bénéfices puis-je attendre en utilisant Aurora Tech ?",
          answer: "Digitalisation de votre entreprise, automatisation des tâches, meilleure visibilité en ligne, et solutions personnalisées adaptées au marché ivoirien."
        },
        {
          question: "Comment suivre les témoignages clients ?",
          answer: "Nos clients, comme EcoTech CI, Fashion Boutique Abidjan ou Banque Régionale, partagent leurs expériences sur notre site dans la section Témoignages et réussites."
        },
        {
          question: "Où puis-je voir vos projets réalisés ?",
          answer: "Nos réalisations sont disponibles sur nos sites vitrines, portfolios et applications :\n• cuef-abidjan.auroratech.be\n• llc-ufhb.auroratech.be\n• abel-ekra.auroratech.be\n• quickjob-ci.auroratech.be\n• anumeric.auroratech.be"
        }
      ]
    }
  ];

  return (
    <section id="faq" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold gradient-text mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur Aurora Tech, nos services et produits.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-0 bg-white tech-shadow">
              <CardContent className="p-8">
                <h3 className="font-poppins text-2xl font-bold text-primary mb-6">
                  {category.category}
                </h3>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground whitespace-pre-line">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;