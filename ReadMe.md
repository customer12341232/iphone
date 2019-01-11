The app contain three plugings: StreamingMedia , Transfer File and Transfer.
You need to install them in the app before running it.
You have two folders one for the iphone and the other for the android because we have different paths to download the videos in andorid and iphone. deploy the android folder for andorid app and the iphone folder for iphone app.
The key to sign the android app is inside android folder. Its name my-release-key
The password is 123456789.
We upload the videos on firebase by the same account
customer12341232@gmail.com
Password: Zizoo511
We collect every semester in a folder in firebase to be easy to get the urls.
It give us direct link for every video. We put it in the provider folder inside videoLinks.ts.
This file contain an array each element is a semester until we get into second year of high school than in the third year it will be different. We will have 3 subjects each of them has two semester. You will know the element for which semester by looking at the pages. In html file I use the function and put inside it the index to download and check the videos. The first number 0 is the first element in the array which is first year in primary school in the first semester. The second element is the second semeseter the third element is the second year first semeseter and so on untill the third year which is different but you will see the index for the element is used in the html file so you can know for what. Adding video is simple just copy and paste with changing just the name and the link. *Note: you should not have two videos by the same name*.
The most important files are inside provider. The app is download the video and check if it's not exist to download it. 

