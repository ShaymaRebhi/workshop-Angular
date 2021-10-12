import { computeDecimalDigest } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { Fourniseur } from '../model/fourniseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {
list : Fourniseur[] ;
  constructor() { }

  ngOnInit(): void {
    this.list=[
      
{idFournisseur:1,code:"  1ABC4522  ",  libelle: "hp"},
{idFournisseur:2,code:"  2ABC4522  ",libelle:"dell"},
{idFournisseur:3,code:"  3ABC4522  ",libelle:"lenovo"},
{idFournisseur:400,code:"  40ABC452  ",libelle:"asus"}
      ]
      }
      getColor(fourniseur:Fourniseur){
         if(fourniseur.code.startsWith('2A'))
        return 'bold' 
        else return 'normal'
    
      }
      delete(fourniseur:Fourniseur){
        let i = this.list.indexOf(fourniseur);
        this.list.splice(i,1);
      }
    
    
    

}
