-- VERIFIED COORDINATES FOR PEOPLE PROFILES

INSERT INTO people ("firstName", "lastName", pronouns, "heritageLocation", latitude, longitude, "userDescription", "contactInfo") VALUES

-- CANADA (Verified)
('Robert', 'Davidson', 'He/Him', 'Haida Gwaii, BC, Canada', 53.2533, -132.0982,
'Master carver and artist from the Haida Nation. I specialize in traditional totem pole carving and Northwest Coast formline design. My work has been featured in galleries worldwide, but my greatest joy is teaching young Haida artists the techniques passed down through generations. I also work on language revitalization projects to keep Xaayda Kil alive.',
'robert.davidson.art@example.com'),

('Tanya', 'Kappo', 'She/Her', 'Sturgeon Lake Cree Nation, AB, Canada', 55.2781, -117.4692,
'Environmental scientist and land defender. I combine traditional Cree ecological knowledge with modern science to protect our waterways and forests. I run workshops teaching youth about traditional plant medicine and sustainable harvesting practices. My kokum (grandmother) taught me that we are caretakers of the land, not owners.',
'tanya.landkeeper@example.com | Instagram: @cree_science'),

('Louis', 'Riel Jr.', 'He/Him', 'Winnipeg, MB, Canada', 49.8951, -97.1384,
'Métis fiddler and Red River jig dancer. I perform traditional Métis music at festivals across Canada and teach fiddle to kids in our community. The vibrant sound of the fiddle and the rhythm of our jigging connect me to my Métis ancestors who survived and thrived despite centuries of hardship. L''union fait la force!',
'louis.fiddle@example.com'),

('Aluki', 'Kotierk', 'They/Them', 'Iqaluit, Nunavut, Canada', 63.7467, -68.5170,
'Inuit throat singer and climate activist. I use traditional katajjaq (throat singing) to raise awareness about Arctic climate change. My performances blend ancient Inuit vocal traditions with contemporary environmental messaging. I also document elders'' stories about changes in ice patterns and wildlife migration over the past 50 years.',
'aluki.voice@example.com | TikTok: @arcticvoices'),

('Sarah', 'Denny', 'She/Her', 'Eskasoni First Nation, NS, Canada', 45.9333, -60.6167,
'Mi''kmaq basket weaver and storyteller. I create traditional ash-splint baskets using techniques that are thousands of years old. Each basket carries stories woven into its patterns. I teach basket weaving workshops and share Mi''kmaq legends with school groups. Msit No''kmaq - All my relations.',
'sarah.weaves@example.com'),

-- USA (Verified)
('Thomas', 'Begay', 'He/Him', 'Window Rock, AZ, USA', 35.6805, -109.0524,
'Navajo Code Talker descendant and Diné language teacher. My grandfather was a Code Talker in WWII. I''m dedicated to preserving our Diné bizaad (Navajo language) by creating apps and digital resources for young learners. I also practice traditional silversmithing and create jewelry with symbols that tell our people''s stories.',
'thomas.dine@example.com'),

('Wilma', 'Mankiller II', 'She/Her', 'Tahlequah, OK, USA', 35.9151, -94.9700,
'Cherokee Nation citizen and women''s rights advocate. Named after our first female Principal Chief, I work on programs supporting Cherokee women entrepreneurs and preserving traditional pottery techniques. I also teach Cherokee syllabary to children and adults, ensuring our written language continues for future generations.',
'wilma.cherokee@example.com | Twitter: @CherokeeStrong'),

('Joseph', 'Brings Plenty', 'He/Him', 'Pine Ridge, SD, USA', 43.0269, -102.5560,
'Lakota horseman and cultural educator. I train horses using traditional Lakota methods and teach young people about our sacred relationship with šúŋka wakhán (horses). I participate in and organize traditional ceremonies and work to keep our Lakota values of generosity, bravery, and wisdom alive in our community.',
'joseph.horses@example.com'),

('Elizabeth', 'Peratrovich Jr.', 'She/Her', 'Juneau, AK, USA', 58.3019, -134.4197,
'Tlingit civil rights activist and regalia maker. I create traditional button blankets and ceremonial regalia for potlatches and celebrations. My great-grandmother fought against discrimination in Alaska, and I continue that legacy by mentoring Native youth and organizing cultural events that celebrate Tlingit art, dance, and oratory traditions.',
'elizabeth.tlingit@example.com'),

('Marcus', 'Lomatewama', 'He/Him', 'Hopi Reservation, AZ, USA', 35.8347, -110.4192,
'Hopi farmer and traditional knowledge keeper. I grow heritage corn varieties using dryland farming techniques passed down for centuries. Our corn is sacred - it feeds our bodies and our spirits. I work with seed banks to preserve Hopi crop diversity and teach sustainable agriculture practices rooted in respect for the earth.',
'marcus.seeds@example.com'),

-- AUSTRALIA (Verified - Note: Southern hemisphere uses negative latitudes)
('David', 'Malangi', 'He/Him', 'Arnhem Land, NT, Australia', -12.4281, 134.2428,
'Yolŋu bark painter and didgeridoo craftsman. My artwork tells the Dreamtime stories of my ancestors and depicts the sacred landscapes of Arnhem Land. I create traditional yidaki (didgeridoo) and teach young people the proper cultural protocols for playing this sacred instrument. Our art is our history, our law, and our future.',
'david.yolngu@example.com'),

('Kylie', 'Bracknell', 'She/Her', 'Perth, WA, Australia', -31.9505, 115.8605,
'Noongar playwright and performer. I write and perform stories that blend traditional Noongar narratives with contemporary Indigenous experiences. My work explores identity, belonging, and resilience. I also lead bush tucker walks, teaching about traditional Noongar plant foods and medicines found in our Boodja (country).',
'kylie.noongar@example.com | Instagram: @noongarstories'),

('James', 'Passi', 'He/Him', 'Thursday Island, QLD, Australia', -10.5833, 142.2167,
'Torres Strait Islander dancer and cultural ambassador. I perform traditional Islander dance with elaborate headdresses (dhari) and drums. Our dances tell stories of the ocean, the stars, and our warrior ancestors. I travel to schools across Australia teaching children about Torres Strait Islander culture and the importance of preserving our island traditions.',
'james.torres@example.com'),

-- ENGLAND (Verified)
('Aroha', 'Te Kanawa', 'She/Her', 'London, England', 51.5074, -0.1278,
'Māori living in London, UK. Originally from Aotearoa (New Zealand), I organize Māori cultural events and waiata (song) circles for the Pacific Islander diaspora in Britain. I teach tā moko (traditional tattooing) designs and run workshops on Māori creation stories and tikanga (cultural practices). Though far from home, we keep our culture alive.',
'aroha.maori@example.com | Instagram: @maori_london'),

('Lars', 'Nilsson', 'He/Him', 'Manchester, England', 53.4808, -2.2426,
'Sámi researcher and joik performer based in the UK. Originally from Sápmi (northern Scandinavia), I study indigenous rights and Arctic environmental policy at university. I perform traditional Sámi joik (vocal music) and share stories about reindeer herding culture. I connect with other indigenous peoples in the UK to build solidarity across our diverse cultures.',
'lars.sami@example.com');

-- COORDINATE VERIFICATION REFERENCE:
-- Format: (Latitude, Longitude)
-- Latitude: -90 (South Pole) to +90 (North Pole)
-- Longitude: -180 (West) to +180 (East)
--
-- Expected Map Positions:
-- Canada locations: Should appear across Canada (northern North America)
-- USA locations: Should appear across United States
-- Australia locations: Should appear in southern hemisphere (negative latitude)
-- England locations: Should appear in United Kingdom (Europe)
