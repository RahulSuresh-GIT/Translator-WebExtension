browser.contextMenus.onClicked.addListener(contextMenuAction);
function contextMenuAction(info, tab){

	if(info != null && info.hasOwnProperty('menuItemId')
			&& info.hasOwnProperty('selectionText')){
		var searchURL = findLang(info.menuItemId);


	var url = '';
		
		if(searchURL != ''){
			url = searchURL+info.selectionText;
		}

		console.log("the url is:::"+url);
		
		// When the URL is not null, create a new tab to search
		if( url != ''){
			  browser.tabs.create({url: url});
		}

	}

}


// Create a set of context options for text-selection

browser.contextMenus.create({
  id: "English",
  title: "English",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "French",
  title: "French",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "Spanish",
  title: "Spanish",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "Hindi",
  title: "Hindi",
  contexts: ["selection"]
});



browser.contextMenus.create({
  id: "English",
  title: "English",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "French",
  title: "French",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Spanish",
  title: "Spanish",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Chinese",
  title: "Chinese",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Czech",
  title: "Czech",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Dutch",
  title: "Dutch",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "German",
  title: "German",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Hindi",
  title: "Hindi",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Japanese",
  title: "Japanese",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Kazakh",
  title: "Kazakh",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Korean",
  title: "Korean",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "Malay",
  title: "Malay",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Polish",
  title: "Polish",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Romanian",
  title: "Romanian",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Russian",
  title: "Russian",
  contexts: ["selection"]
});
browser.contextMenus.create({
  id: "Swedish",
  title: "Swedish",
  contexts: ["selection"]
});


browser.contextMenus.create({
  id: "Tamil",
  title: "Tamil",
  contexts: ["selection"]
});browser.contextMenus.create({
  id: "Turkish",
  title: "Turkish",
  contexts: ["selection"]
});
// Find the Search Engine query url to form the url for new tab


function findLang(LangText){
if(LangText == 'English'){
                return 'https://translate.google.co.in/#auto/en/';
        }
        else if(LangText == 'French'){
                return 'https://translate.google.co.in/#auto/fr/';
        }
        else if(LangText == 'Spanish'){
                return 'https://translate.google.co.in/#auto/es/';
        }
        else if(LangText == 'Chinese'){
                return 'https://translate.google.co.in/#auto/zh-CN/';
        }
        else if(LangText == 'Czech'){
                return 'https://translate.google.co.in/#auto/cs/';
        }

         else if(LangText == 'Dutch'){
                return 'https://translate.google.co.in/#auto/nl/';
        } else if(LangText == 'German'){
                return 'https://translate.google.co.in/#auto/de/';
        } else if(LangText == 'Hindi'){
                return 'https://translate.google.co.in/#auto/hi/';
        } else if(LangText == 'Japanese'){
                return 'https://translate.google.co.in/#auto/ja/';
        } else if(LangText == 'Kazakh'){
                return 'https://translate.google.co.in/#auto/kk/';
        } else if(LangText == 'Korean'){
                return 'https://translate.google.co.in/#auto/ko/';
        } else if(LangText == 'Malay'){
                return 'https://translate.google.co.in/#auto/ms/';

                    } else if(LangText == 'Polish'){
                return 'https://translate.google.co.in/#auto/po/';


        } else if(LangText == 'Romanian'){
                return 'https://translate.google.co.in/#auto/ro/';
        } else if(LangText == 'Russian'){
                return 'https://translate.google.co.in/#auto/ru/';
        } else if(LangText == 'Swedish'){
                return 'https://translate.google.co.in/#auto/sv/';
        } else if(LangText == 'Tamil'){
                return 'https://translate.google.co.in/#auto/ta/';
        } else if(LangText == 'Turkish'){
                return 'https://translate.google.co.in/#auto/tr/';
        }
        return '';
}

