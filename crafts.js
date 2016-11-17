(function(){
    var app = angular.module('store', []);
    
    app.controller('StoreController', function(){
        this.product = craftbeers;
    });
    
    var craftbeers = [
        {
        name: 'Christmas Ale',
        brewery: 'Great Lakes Brewing Company',
        description: 'A Yuletide’s worth of holiday spices and sweet honey to keep you a-wassailing all season long.',
        images:[
            {
                full: '../craftsimages/image1.jpeg',
            }
        ]
        },
        {
        name: 'Bells Christmas Ale',
        brewery: 'Bells Brewery Inc',
        description: 'A blend of hops from Michigan and the Pacific Northwest lend an earthy, herbal aroma to compliment your holiday menu, not overpower it.',
        images:[
            {
                full: '../craftsimages/image2.jpeg',
            }
        ]
        },
        {
        name: 'Christmas Ale',
        brewery: 'Breckenridge Brewery',
        description: 'A sturdy texture and rich flavors of caramel and chocolate, our holiday seasonal is the fermented equivalent of a good fire.',
        images:[
            {
                full: '../craftsimages/image3.jpeg',
            }
        ]
        },
        {
        name: '12 Dogs of Christmas Ale',
        brewery: 'Thristy Dog Brewing Company',
        description: 'Filled with seasonal flavors from generous amounts of toasted and caramel malts, mixed with equality generous amounts of honey, cinnamon, ginger, and nutmeg.',
        images:[
            {
                full: '../craftsimages/image4.jpeg',
            }
        ]        
        },
        {
        name: 'Saint Arnold Christmas Ale',
        brewery: 'Saint Arnold Brewing Company',
        description: 'A rich, copper colored, hearty ale perfect for the holiday season with a malty sweetness and spicy hop character.',
        images:[
            {
                full: '../craftsimages/image5.jpeg',
            }
        ]        
        },
        {
        name: 'Schlafly Christmas Ale',
        brewery: 'The Schlafly Tap Room',
        description: 'Warming winter ale that blends the spices of the season with sweet caramel malt.  Orange peel, juniper berries, ginger root, cardamom and cloves are added for spiciness.',
        images:[
            {
                full: '../craftsimages/image6.jpeg',
            }
        ]        
        },
        {
        name: 'Frosted Frog Christmas Ale',
        brewery: 'Hoppin Frog Brewery',
        description: 'Perfectly blended spices compliment Frosted Frog’s rich malt flavors, creating the ultimate Christmas experience.',
        images:[
            {
                full: '../craftsimages/image7.jpeg',
            }
        ]            
        },
        {
        name: 'Christmas BOMB!',
        brewery: 'Prairie Artisan Ales',
        description: 'Imperial stout aged on espresso beans, chocolate, vanilla beans, and ancho chile peppers & Christmas spices.',
        images:[
            {
                full: '../craftsimages/image8.jpeg',
            }
        ]            
        },
        {
        name: 'Christmas Ale',
        brewery: 'Upslope Brewery',
        description: 'Holiday spices complement the dark fruit and spicy notes from Abbey Ale Yeast. The distinctive holiday aroma, ruby red color and rich malt flavor make this ale perfect for spreading Christmas cheer.',
        images:[
            {
                full: '../craftsimages/image9.jpeg',
            }
        ]            
        },
        {
        name: 'Christmas Ale',
        brewery: 'West Sixth Brewing',
        description: 'Spiced ale with aroma of cinnamon and nutmeg with a sturdy malt backbone that will hold up to the chilliest of nights.',
        images:[
            {
                full: '../craftsimages/image10.jpeg',
            }
        ]            
        },
        {
        name: 'Frankenmuth Christmas Town Ale',
        brewery: 'Frankenmuth Brewery',
        description: 'Combines sweet toasted dark malts with American hops and subtle notes of nutmeg, ginger, cinnamon and clove.',
        images:[
            {
                full: '../craftsimages/image11.jpeg',
            }
        ]            
        },
        {
        name: 'Jubelale',
        brewery: 'Deschutes Brewery',
        description: 'Cocoa, dried fruit, and toffee notes. A robust ale with a warming spice.',
        images:[
            {
                full: '../craftsimages/image12.jpeg',
            }
        ]            
        },
        {
        name: 'Christmas Ale',
        brewery: 'Anchor Brewing',
        description: 'Deep mahogany brown with a creamy, tan head and boasts aromas of fruitcake, molasses, and fresh cut wood. The beer tastes of a roasted caramel malt, with notes of spiced chocolate and nuts.',
        images:[
            {
                full: '../craftsimages/image13.jpeg',
            }
        ]            
        },
         {
        name: 'Milk Stout Nitro',
        brewery: 'Left Hand Brewing Company ',
        description: 'The pillowy head coats your upper lip and its creaminess entices your palate. Initial roasty, mocha flavors rise up, with slight hop & roast bitterness in the finish.',
        images:[
            {
                full: '../craftsimages/image14.jpeg',
            }
        ]            
        },
         {
        name: 'Winter Warlock ',
        brewery: 'Bristol Brewing Company',
        description: 'Chock full of highly roasted barley malt and 150 lbs. of flaked oatmeal, the Warlock is a dark and satisfying winter elixir. Smooth, rich and exceptionally comforting.',
        images:[
            {
                full: '../craftsimages/image15.jpeg',
            }
        ]            
        },
        ];
    
})();