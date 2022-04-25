import qrcode
img = qrcode.make('http://tharunvemula.herokuapp.com/')
type(img)
img.save('tharun.jpg')
