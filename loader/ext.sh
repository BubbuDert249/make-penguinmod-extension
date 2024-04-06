extension()
bubbu.extname=(name)
bubbu.extver=(ver)
bubbu.extimg=(avatar)

blocks{

1 block start
id=firstblock #ID Do not change!
type=stack
name=URL: {string}
colorhex=FFF #Color of block
1 block end

2 block start
id=secondblock #ID Do not change!
type=stack
name=Number: {number}
colorhex=FFF #Color of block
2 block end

}
#Contact me for scripts for more blocks

bubbu.extwork=start
receive firstblock then
openurl.newtab=(firstblock-string)

receive secondblock then
null  

 bubbu.extwork=end

 return extension();
