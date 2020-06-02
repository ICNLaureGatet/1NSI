from PIL import Image

def filtre(image1, couleur):
    """cette fonction modifie l'image initiale en appliquant des filtres"""
    larg,haut=image1.size
    newImage=Image.new("RGB",(larg,haut))
    for x in range(larg):
        for y in range(haut):
            rouge,vert,bleu=image1.getpixel((x,y))
            gris = int((rouge+vert+bleu)/3)
            if couleur == 'rouge' :
                newImage.putpixel((x,y),(rouge,0,0))
    return newImage
im1 = Image.open("Chateau.jpg")
image=filtre(im1, 'rouge')
