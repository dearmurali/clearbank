angular.module('ClearBank')

.config(['$translateProvider',function($translateProvider){
    
    $translateProvider.translations('du',{
        'customerid' : 'Klanten ID',
        'password' : 'Wachtwoord',
        'musthave10digits':'Moet 10 cijfers hebben',
        'register':'Registreren',
        'register here':'Registreer Hier',
        'login': 'Log in',
        'cancel':'Annuleer',
        'submit':'Voorleggen',
        
        'typeyourcustomerid':'Typ uw klant-ID',
        'typeyourpassword':'Typ uw wachtwoord',
        'invalididandorpassword' : 'Ongeldige ID en / of wachtwoord',
        'forgotpassword':'Wachtwoord vergeten',
        'note':'Notitie',
        'indicatesmandatoryfields':'geeft verplichte velden',
        
        'change password':'VERANDER WACHTWOORD',
        'enter mobile number':'ENTER MOBIEL NUMMER',
        'enter registered mobile number':'Voer geregistreerde mobiele nummer',
        'please enter a valid mobile number':'Vul een geldig mobiel nummer',
        'mobile number is not registered':'Mobiel nummer is niet geregistreerd',
        
        'reset password':'WACHTWOORD OPNIEUW INSTELLEN',
        'confirm password':'BEVESTIG WACHTWOORD',
        'new password':'Nieuw Paswoord',
        'confirm new password':'Bevestig Nieuw Wachtwoord',
        
        'whats your name':"Wat is je naam",
        "please enter alphabets only":"Alleen vul alfabetten",
        "enter name":"Voer naam in",
        "we need your name to talk to you" : "Wij hebben uw naam met je praten",
        "and your customer id":"en uw klant id",
        "please enter a valid 10 digit account id" : "Vul een geldig 10 cijferig rekening id",
        "dont leave this empty" : "Dit bericht niet leeglaten",
        "enter account number" : "Account nummer invoeren",
        "well never share your account info with anyone else" : "We zullen nooit uw accountgegevens met iemand anders",
        "contact number" : "contact nummer",
        "enter phone number" : "Voer telefoonnummer in",
        "please enter a valid 10 digit contact number" : "Geef een geldig 10 cijferig telefoonnummer",
        "dont leave this empty" : "Dit bericht niet leeglaten",
        "an email address to contact you" : "een e-mailadres om u te contacteren",
        "enter email" : "Voer email in",
        "please enter a valid email address" : "Gelieve een geldig e-mailadres in te geven",
        "well never share your email with anyone else" : "We zullen nooit uw e-mail met iemand anders",
        "set a password for this account" : "Stel een wachtwoord in voor deze account",
        "please enter a valid password" : "Please enter a valid password",
        "secure your account with a password" : "beveiligen van uw account met een wachtwoord (8-20 alfanumerieke en speciale tekens)",
        "and reenter to confirm" : "en re-enter",
        "please enter a valid password" : "Voer alstublieft een geldig wachtwoord in",
        "enter same password as above" : "Voer hetzelfde wachtwoord als hierboven",
        "passwords do not match" : "Wachtwoorden komen niet overeen"
    });
}]);