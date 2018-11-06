import { getDevice, trimText, sortItemsBy } from './formatHelper';

describe("getDevice Function", () => {

    it('Should return "Mobile" ', () => {
        const mobileDevices = [
            "Mozilla/5.0 (Linux; Android 4.2.1; en-us; Nexus 5 Build/JOP40D) AppleWebKit/535.19 (KHTML, like Gecko; googleweblight) Chrome/38.0.1025.166 Mobile Safari/535.19",
            "Mozilla/5.0 (Linux; Android 4.4.2; XMP-6250 Build/HAWK) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36 ADAPI/2.0 (UUID:9e7df0ed-2a5c-4a19-bec7-2cc54800f99d) RK3188-ADAPI/1.2.84.533 (MODEL:XMP-6250)",
            "Mozilla/5.0 (Linux; Android 6.0.1; SM-G532G Build/MMB29T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.83 Mobile Safari/537.36",
            "Mozilla/5.0 (Linux; Android 6.0; vivo 1713 Build/MRA58K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.124 Mobile Safari/537.36",
            "Mozilla/5.0 (iPad; CPU OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13F69 Safari/601.1",
            "Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1",
            "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B410 Safari/600.1.4",
            "BlackBerry8520/5.0.0.592 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/168"
        ];

        mobileDevices.forEach(item => {
            expect(getDevice(item)).toBe("Mobile");
        });

    });

    it('Should return "Desktop"', () => {
        const desktopDevices = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
            "Mozilla/5.0 (Windows NT 5.1; rv:7.0.1) Gecko/20100101 Firefox/7.0.1",
            "Mozilla/4.0 (compatible; MSIE 9.0; Windows NT 6.1)",
            "Mozilla/5.0 (Windows NT 10.0; WOW64; rv:56.0) Gecko/20100101 Firefox/56.0",
            "Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Thunderbird/45.3.0",
            "Mozilla/5.0 (Unknown; Linux) AppleWebKit/538.1 (KHTML, like Gecko) Chrome/v1.0.0 Safari/538.1",
            "Mozilla/5.0 (X11; Linux i686; rv:10.0.2) Gecko/20100101 Firefox/10.0.2 DejaClick/2.4.1.6",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1 Safari/605.1.15"
        ];

        desktopDevices.forEach(item => {
            expect(getDevice(item)).toBe("Desktop");
        });
    });
});

describe("trimText Function", () => {
    it("Should trim a given string if the string is greater than the given limit", () => {
        expect(trimText("cristian", 3)).toBe("cri...");
        expect(trimText("cristian", 9)).toBe("cristian");
    });
});

describe("sortItemsBy Function", () => {
    it("Should Rearrange the given items in ASC order", () => {
        const items = [
            {
                ranking: 3,
                name: "Cristian"
            },
            {
                ranking: 1,
                name: "Ernesto"
            },
            {
                ranking: 2,
                name: "Carlos"
            }
        ];

        expect(sortItemsBy(items, "ranking")[0]).toMatchObject({
            ranking:1,
            name:"Ernesto"
        });

        expect(sortItemsBy(items, "ranking")[1]).toMatchObject({
            ranking:2,
            name:"Carlos"
        });

        expect(sortItemsBy(items, "ranking")[2]).toMatchObject({
            ranking:3,
            name:"Cristian"
        });

    });
});