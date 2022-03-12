     
// Hubspot | Contact Form Master | Embed Code
// v1.0.0-beta

hbspt.forms.create({
region: "eu1",
portalId: "25214962",
formId: "2a474595-1fc6-44b6-b045-7f525313a4bb",               
	locale: formLanguage,
			
	// THANK YOU MESSAGE
	// *** IMPORTANT: COMMENT OUT LINE BELOW IF useRedirectURL = true
	// inlineMessage: thankYouMessage, 
	
	onFormSubmitted: function() {
		
		// ***** REDIRECT URL *****
		if(useRedirectURL === true) {
			window.location.href = redirectURL; 
		}
	},
	
	onFormReady: function($form){

		// *************** FORM CONTENT & MULTI-VALUE FIELD TRANSLATIONS (dropdown / checkbox options) ***************
		
		if(formLanguage == 'nl') {
		
			// ------- locale: nl (dutch) ------- //

			// Field: de_software_usage_type dropdown | Purpose: STANDARD     
			$form.find('option').filter(function(){ return $(this).val() == 'Professional'; }).text('Professioneel gebruik');
			$form.find('option').filter(function(){ return $(this).val() == 'Private'; }).text('Privé gebruik');
			$form.find('option').filter(function(){ return $(this).val() == 'Educational'; }).text('Als student of docent');    

			// Field: de_discipline | Type: multi-checkbox | Purpose: STANDARD 
			$form.find('span').filter(function(){ return $(this).text() == 'Architecture'; }).text('Architectuur');
			$form.find('span').filter(function(){ return $(this).text() == 'Interior'; }).text('Interieur');
			$form.find('span').filter(function(){ return $(this).text() == 'Interior Construction'; }).text('Interieurbouw');
			$form.find('span').filter(function(){ return $(this).text() == 'Urban Planning & Public Space'; }).text('Stedenbouw & openbare ruimte');
			$form.find('span').filter(function(){ return $(this).text() == 'Garden Design & Landscape'; }).text('Tuinontwerp & landschap');
			$form.find('span').filter(function(){ return $(this).text() == 'Events & Entertainment'; }).text('Events & entertainment');
			$form.find('span').filter(function(){ return $(this).text() == 'Other'; }).text('Andere');

			// Field: reason_for_contact | Type: multi-checkbox | Purpose: STANDARD  
			$form.find('span:contains("be contacted for a demonstration")').html("gecontacteerd worden voor een demonstratie");
			$form.find('span:contains("receive a price offer")').html("een offerte ontvangen");
			
			// Field: reason_for_contact_information | Type: multiline text | Purpose: STANDARD
			$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder','Stel je vraag');                
			
			// Field: reason_for_contact | Purpose: EDUCATIONAL
			$form.find('span:contains("receive educational material & workshops")').html("lesmateriaal en workshops");
			$form.find('span:contains("receive free educational licenses")').html("gratis licenties voor onderwijs");       
			
			// Field: reason_for_contact | Purpose: CONSULTANCY
			$form.find('span:contains("receive customized advice")').html("advies op maat ontvangen");
						   
			 // Field: reason_for_contact | Purpose: PRIVATE TRAINING
			$form.find('span:contains("receive customized private training")').html("privé training op maat ontvangen");

			// Field: notice and consent / legitimate interest (GDPR) | Purpose: STANDARD
			$form.find('p').filter(function(){ return $(this).html() == 'By submitting this form you agree that Design Express may contact you with news, promotions and information about the software.&nbsp; For further information, please refer to our <a href="https://designexpress.webflow.io/privacy" target="_blank" rel="noopener">privacy policy</a>.'; })
					.html('Door het indienen van dit formulier aanvaard je dat Design Express je kan contacteren met nieuws, promoties en informatie.  Lees hier meer over ons <a href="' + privacyPolicyUrl + '" target="_blank" rel="noopener">privacybeleid</a>.');
			
			$form.find('p').filter(function(){ return $(this).html() == 'I agree to the terms and conditions.'; })
					.html('Ik ga akkoord met de voorwaarden.');
			
			if(formPurpose == 'consultancy') {
				$form.find('span[data-reactid=".hbspt-forms-0.1:$11.1:$reason_for_contact_information.0.0"]').text("Ik heb interesse in advies op maat.");
				$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder','Meer informatie');                                          
			} else if(formPurpose == 'private training') {
				$form.find('span[data-reactid=".hbspt-forms-0.1:$11.1:$reason_for_contact_information.0.0"]').text("Ik heb interesse in privétraining op maat");
				$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder','Geef zoveel mogelijk informatie over het onderwerp, het gewenste aantal deelnemers, de gewenste locatie,...');
			}
			
		} else if(formLanguage == 'fr') {

			// ------- locale: fr (french) ------- //

			// Field: de_software_usage_type dropdown | Purpose: STANDARD      
			$form.find('option').filter(function(){ return $(this).val() == 'Professional'; }).text('Professionnelle');
			$form.find('option').filter(function(){ return $(this).val() == 'Private'; }).text('Privée');
			$form.find('option').filter(function(){ return $(this).val() == 'Educational'; }).text('Etudiant ou professeur');    

			// Field: de_discipline | Type: multi-checkbox | Purpose: STANDARD 
			$form.find('span').filter(function(){ return $(this).text() == 'Architecture'; }).text('Architecture');
			$form.find('span').filter(function(){ return $(this).text() == 'Interior'; }).text("Architecture d'intérieur");
			$form.find('span').filter(function(){ return $(this).text() == 'Interior Construction'; }).text('Aménagement intérieur');
			$form.find('span').filter(function(){ return $(this).text() == 'Urban Planning & Public Space'; }).text('Urbanisme & espace public');
			$form.find('span').filter(function(){ return $(this).text() == 'Garden Design & Landscape'; }).text('Conception de jardins & de paysages');
			$form.find('span').filter(function(){ return $(this).text() == 'Events & Entertainment'; }).text('Evénementiel & scénographie');
			$form.find('span').filter(function(){ return $(this).text() == 'Other'; }).text('Autre');

			// Field: reason_for_contact | Type: multi-checkbox | Purpose: STANDARD          
			$form.find('span:contains("be contacted for a demonstration")').html("être contacté pour une démonstration");
			$form.find('span:contains("receive a price offer")').html("recevoir un devis");
			
			// Field: reason_for_contact_information | Type: multiline text | Purpose: STANDARD
			$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder','Posez votre question ici'); 
			
			// Field: reason_for_contact | Purpose: EDUCATIONAL            
			$form.find('span:contains("receive educational material & workshops")').html("du matériel pédagogique et des ateliers");
			$form.find('span:contains("receive free educational licenses")').html("licences gratuites pour l'éducation");
			
			// Field: reason_for_contact | Purpose: CONSULTANCY
			$form.find('span:contains("receive customized advice")').html("recevoir des conseils personnalisés");
						   
			 // Field: reason_for_contact | Purpose: PRIVATE TRAINING
			$form.find('span:contains("receive customized private training")').html("recevoir une formation privée personnalisée");

			// Field: notice and consent / legitimate interest (GDPR) | Purpose: STANDARD
			$form.find('p').filter(function(){ return $(this).html() == 'By submitting this form you agree that Design Express may contact you with news, promotions and information about the software.&nbsp; For further information, please refer to our <a href="https://designexpress.webflow.io/privacy" target="_blank" rel="noopener">privacy policy</a>.'; })
					.html("En soumettant ce formulaire, vous acceptez que Design Express puisse vous contacter à propos d'actualités, de promotions et d'informations sur le logiciel. En savoir plus sur notre <a href=" + privacyPolicyUrl + " target=\"_blank\" rel=\"noopener\">politique de confidentialité</a>.");
			
			$form.find('p').filter(function(){ return $(this).html() == 'I agree to the terms and conditions.'; })
					.html("J'accepte les conditions d'utilisation ci-dessus.");
			
			if(formPurpose == 'consultancy') {
				$form.find('span[data-reactid=".hbspt-forms-0.1:$11.1:$reason_for_contact_information.0.0"]').text("Je suis intéressé par des conseils personnalisés.");
				$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder',"Plus d'informations");                                          
			} else if(formPurpose == 'private training') {
				$form.find('span[data-reactid=".hbspt-forms-0.1:$11.1:$reason_for_contact_information.0.0"]').text("Je suis intéressé(e) par des formations privées sur mesure");
				$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder',"Veuillez fournir autant d'informations que possible sur le sujet, le nombre de participants et le lieu souhaités, ...");
			}
			
		 } else if(formLanguage == 'pl') {
			 
			 // ------- locale: pl (Polish) ------- //
			 
			 // Field: de_software_usage_type dropdown | Purpose: STANDARD     
			$form.find('option').filter(function(){ return $(this).val() == 'Professional'; }).text('Zawodowo');
			$form.find('option').filter(function(){ return $(this).val() == 'Private'; }).text('Prywatnie');
			$form.find('option').filter(function(){ return $(this).val() == 'Educational'; }).text('Student lub wykładowca');    

			// Field: de_discipline | Type: multi-checkbox | Purpose: STANDARD 
			$form.find('span').filter(function(){ return $(this).text() == 'Architecture'; }).text('Architektura');
			$form.find('span').filter(function(){ return $(this).text() == 'Interior'; }).text('Architektura wnętrz');
			$form.find('span').filter(function(){ return $(this).text() == 'Interior Construction'; }).text('Architektura krajobrazu i urbanistyka');
			$form.find('span').filter(function(){ return $(this).text() == 'Urban Planning & Public Space'; }).text('Urbanistyka i planowanie przestrzenne');
			$form.find('span').filter(function(){ return $(this).text() == 'Garden Design & Landscape'; }).text('Architektura krajobrazu i projektowanie ogrodów');
			$form.find('span').filter(function(){ return $(this).text() == 'Events & Entertainment'; }).text('Technika sceniczna');
			$form.find('span').filter(function(){ return $(this).text() == 'Other'; }).text('Inne');

			// Field: reason_for_contact | Type: multi-checkbox | Purpose: STANDARD  
			$form.find('span:contains("be contacted for a demonstration")').html("kontakt w celu umówienia prezentacji");
			$form.find('span:contains("receive a price offer")').html("przesłanie propozycji cenowej"); 
			
			// Field: reason_for_contact_information | Type: multiline text | Purpose: STANDARD
			$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder','Zadaj swoje pytanie'); 
			
			// Field: reason_for_contact | Purpose: EDUCATIONAL
			$form.find('span:contains("receive educational material & workshops")').html("zorganizowanie bezpłatnego warsztatu edukacyjnego");
			$form.find('span:contains("receive free educational licenses")').html("dostęp do bezpłatnej licencji edukacyjnej");   
			
			// Field: reason_for_contact | Purpose: CONSULTANCY
			$form.find('span:contains("receive customized advice")').html("otrzymuj spersonalizowane porady");
						   
			 // Field: reason_for_contact | Purpose: PRIVATE TRAINING
			$form.find('span:contains("receive customized private training")').html("otrzymuj spersonalizowane prywatne szkolenia");                

			// Field: notice and consent / legitimate interest (GDPR) | Purpose: STANDARD
			$form.find('p').filter(function(){ return $(this).html() == 'By submitting this form you agree that Design Express may contact you with news, promotions and information about the software.&nbsp; For further information, please refer to our <a href="https://designexpress.webflow.io/privacy" target="_blank" rel="noopener">privacy policy</a>.'; })
					.html('Wysyłając ten formularz akceptujesz, że Design Express może się z Tobą kontaktować w sprawie nowości, promocji i informacji o oprogramowaniu. Więcej o naszej <a href="' + privacyPolicyUrl + '" target="_blank" rel="noopener">polityce prywatności</a> można przeczytać na stronie.');
			
			$form.find('p').filter(function(){ return $(this).html() == 'I agree to the terms and conditions.'; }).
					html('Akceptuję powyższe warunki użytkowania.');
			
			if(formPurpose == 'consultancy') {
				$form.find('span[data-reactid=".hbspt-forms-0.1:$11.1:$reason_for_contact_information.0.0"]').text("Interesują mnie wskazówki i porady dopasowane do moich potrzeb.");
				$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder',"Więcej informacji");                                          
			} else if(formPurpose == 'private training') {
				$form.find('span[data-reactid=".hbspt-forms-0.1:$11.1:$reason_for_contact_information.0.0"]').text("Jestem zainteresowany indywidualnym szkoleniem dopasowanym do moich potrzeb");
				$form.find('textarea').filter(function(){ return $(this).attr('name') == 'reason_for_contact_information'; }).attr('placeholder',"Proszę podać jak najwięcej informacji o szkoleniu - tematy, ilość uczestników oraz preferowane miejsce,..");
			}
			 
		 }   

		// Hide all optional content
		$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$demo request"]').hide();
		$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$offer request"]').hide();
		$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$free educational license request"]').hide();
		$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$educational material & workshops request"]').hide();
		$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$customized advice request"]').hide();
		$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$private training request"]').hide();
					
		// Show optional content by purpose
		if(formPurpose == 'standard') {            
			// Field: reason_for_contact - consultancy                                 
			$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$demo request"]').show();
			$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$offer request"]').show();
		} else if(formPurpose == 'education') {            
			// Field: reason_for_contact - education                                 
			$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$free educational license request"]').show();
			$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$educational material & workshops request"]').show();
		} else if(formPurpose == 'consultancy') {            
			// Field: reason_for_contact - consultancy                                 
			$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$customized advice request"]').show();
		} else if(formPurpose == 'private training') {            
			// Field: reason_for_contact - private training                                 
			$form.find('li[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact.$reason_for_contact.0.$private training request"]').show();
		} 

		// Hide fields by sector            
		if(formSector == 'BENL' || formSector == 'BEFR' || formSector == 'NL') {
			$form.find('div[data-reactid=".hbspt-forms-0.1:$7.1:$state"]').hide();
		}
					
		// Hide fields by purpose            
		if(formPurpose == 'support') {
			$form.find('div[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact"]').hide();            
		} else if(formPurpose == 'consultancy') {
			$form.find('input[id="reason_for_contact4-2a474595-1fc6-44b6-b045-7f525313a4bb"]').prop('checked', true).change();                               
			$form.find('div[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact"]').hide();
		}  else if(formPurpose == 'private training') {
			$form.find('input[id="reason_for_contact5-2a474595-1fc6-44b6-b045-7f525313a4bb"]').prop('checked', true).change();                               
			$form.find('div[data-reactid=".hbspt-forms-0.1:$10.1:$reason_for_contact"]').hide();
		}
	},
	
	// ************* FIELD LABEL & FORM MESSAGE TRANSLATIONS ***********
	
	translations: {
		nl: {
			required: "Vul dit verplichte veld in.",
			submitText: "Verzenden",                   
			submissionErrors:{ 
				MISSING_REQUIRED_FIELDS: "Vul alle verplichte velden in." 
			},  
			fieldLabels: {
				firstname: "Voornaam",
				lastname: "Naam",
				phone: "Telefoon / mobiel",
				email: "E-mail",
				address: "Straat",
				house_number: "Nummer",
				city: "Plaats",
				zip_code: "Postcode",
				state: "Provincie",
				contact_country: "Land",
				de_discipline: "Vakgebied",
				reason_for_contact: "Ik wil graag",
				reason_for_contact_information: "Ik heb een vraag",
				de_software_usage_type: "Gebruik van de software",
				remarks: "Andere",
				other_question: "Ik heb een vraag",
				company: "Bedrijfsnaam",
				school_name: "Onderwijsinstelling"                        
			}
		},            
		fr: {
			required: "Remplissez le champ requis.",
			submitText: "Envoyer",                   
			submissionErrors:{ 
				MISSING_REQUIRED_FIELDS: "Remplissez tous les champs obligatoires." 
			},  
			fieldLabels: {
				firstname: "Prénom",
				lastname: "Nom",
				phone: "Téléphone / portable",
				email: "E-mail",
				address: "Rue",
				house_number: "Numéro",
				city: "Ville",
				zip_code: "Code postal",
				state: "Région",
				contact_country: "Pays",
				de_discipline: "Discipline",
				reason_for_contact: "Je voudrais",
				reason_for_contact_information: "J'ai une question",
				de_software_usage_type: "Utilisation du logiciel",
				remarks: "Autre",
				other_question: "J'ai une question",
				company: "Nom de l'entreprise",
				school_name: "Établissement d'enseignement"

			}
		},            
		pl: {
			required: "Wypełnij to pole obowiązkowe.",
			submitText: "Wyślij",                   
			submissionErrors:{ 
				MISSING_REQUIRED_FIELDS: "Wypełnij wszytskie wymagane pola." 
			},  
			fieldLabels: {
				firstname: "Imię",
				lastname: "Nazwisko",
				phone: "Telefon",
				email: "E-mail",
				address: "Ulica",
				house_number: "Numer",
				city: "Miasto",
				zip_code: "Kod pocztowy",
				state: "Województwo",
				contact_country: "Kraj",
				de_discipline: "Branża",
				reason_for_contact: "Chciałbym prosić o",
				reason_for_contact_information: "Mam pytanie",
				de_software_usage_type: "W jakim celu będziesz korzystał z oprogramowania?",
				remarks: "Inne",
				other_question: "Mam pytanie",
				company: "Nazwa firmy",
				school_name: "Nom de l'entreprise"

			}
		},   
	  }   
});
