import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { SafeAreaView } from 'react-native-safe-area-context';


const IMC = () => {
  const [taille, setTaille] = useState('');
  const [poids, setPoids] = useState('');
  const [imc, setIMC] = useState(null);
  const [interpretation, setInterpretation] = useState('');

  const calculerIMC = () => {
    const tailleEnM = parseFloat(taille);
    const poidsEnKg = parseFloat(poids);

    if (isNaN(tailleEnM) || isNaN(poidsEnKg) || tailleEnM <= 0 || poidsEnKg <= 0) {
      setIMC(null);
      setInterpretation('Veuillez entrer des valeurs valides.');
      return;
    }

    const imcCalcule = poidsEnKg / (tailleEnM * tailleEnM);
    setIMC(imcCalcule.toFixed(2));

    if (imcCalcule < 18.5) {
      setInterpretation("Maigreur , Votre corps ne dispose pas des apports énergétiques et nutriments nécessaires pour fonctionner correctement. Vous vous exposez à des carences et à d’autres problèmes de santé. Un suivi diététique personnalisé peut vous aider à équilibrer votre alimentation.");
    } else if (imcCalcule >= 18.5 && imcCalcule < 25) {
      setInterpretation("Corpulence « normale » :Votre poids ne présente pas de risque pour votre santé. Votre objectif doit être de préserver cet équilibre en mangeant sainement et en pratiquant une activité physique régulière. Toute variation de poids involontaire doit faire l’objet d’un contrôle avec votre diététicienne. Elle vous aidera à corriger le tir pour que vous restiez à un poids de forme stable.");
    } else if (imcCalcule >= 25 && imcCalcule < 30) {
      setInterpretation("Surpoids , Des kilos en trop ont un impact sur votre santé. Il faut réagir au plus vite pour ne pas glisser vers l’obésité.");
    } else if (imcCalcule >= 30 && imcCalcule < 35) {
      setInterpretation("Obésité modérée , Votre IMC indique que vous êtes en obésité au sens médical du terme. Votre santé s’en trouve fortement impactée. Retrouver un IMC entre 18,5 et 24,9 prendra du temps. Un suivi diététique sérieux vous permettra d’atteindre votre objectif et surtout de ne pas reprendre de poids.");
    } else if (imcCalcule >= 35 && imcCalcule < 40) {
      setInterpretation("Obésité sévère, Votre IMC indique une obésité sévère, ce qui signifie un impact immédiat sur votre santé et des risques à moyen terme. Le chemin de la perte de poids sera long, mais chaque étape franchie vous apportera un gain de santé.");
    } else {
      setInterpretation("Obésité morbide, Vous courrez un danger imminent pour votre santé. Il vous faut perdre rapidement du poids.");
    }
  };

  return (
  
  
    <SafeAreaView>  
   <View>
    
   <Image   source={require('../assets/190.jpg')} style={{width:260, height:140, top:18, left:79, borderRadius:10,   }}/>
 
  

 <View style={styles.container_T}>       
<Text style={styles.label}>Taille (m) :</Text>
</View>


<View style={styles.container_P}>
<Text style={styles.label}>Poids (kg) :</Text>
</View>


    <View >

    <View style={styles.container_1}>    
      <TextInput
        style={styles.input}
        placeholder="Entrez votre taille en mètres"
        keyboardType="numeric"
        value={taille}
        onChangeText={text => setTaille(text)}
      />
    </View>

    
    <View style={styles.container_2}>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre poids en kilogrammes"
        keyboardType="numeric"
        value={poids}
        onChangeText={text => setPoids(text)}
      />
    </View>
  
    </View>

<View style={styles.container_b}>  
    <Button title="Calculer l'IMC" onPress={calculerIMC} />

</View>  

<View style={styles.container_AF}>
    {imc !== null && <Text style={styles.resultat}>Votre IMC est de : {imc}</Text>}
      {interpretation !== '' && <Text style={styles.interpretation}>Interprétation : {interpretation}</Text>}
    </View>   
    
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container_1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    top:6,
  },

  container_2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    top:45,

  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  resultat: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  interpretation: {
    marginTop: 10,
    fontSize: 16,
  },
  container_b:{

  //top:0,
  marginLeft:80,
  marginRight:80,
  //paddingBottom:50,
  top:50,
  
  

  },
  container_P:{
    top:79,
    left:18,

  },
  container_T:{
top:30,
left:18,

  },
  container_AF:{
    top:45,
    //left:18,
    //bottom:50,
    alignItems:'center',
    marginLeft:15,
    marginRight:15,
  },
  container_CP:{
  

  },



});

export default IMC;
