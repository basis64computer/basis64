function selectTab1() {
                document.getElementById('buttonTab1').setAttribute("class", "nav-link active");
                document.getElementById('buttonTab2').setAttribute("class", "nav-link");
                document.getElementById('tab1').hidden = false;
                document.getElementById('tab2').hidden = true;
            }

            function selectTab2() {
                document.getElementById('buttonTab1').setAttribute("class", "nav-link");
                document.getElementById('buttonTab2').setAttribute("class", "nav-link active");
                document.getElementById('tab1').hidden = true;
                document.getElementById('tab2').hidden = false;
            }

            function ipToBinary(ip) {
                return ip.split('.').map(octet => ('00000000' + parseInt(octet, 10).toString(2)).slice(-8)).join('');
            }

            function ipToInteger(ip) {
                return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
            }

            function integerToIp(int) {
                return [(int >>> 24) & 255, (int >>> 16) & 255, (int >>> 8) & 255, int & 255].join('.');
            }

            function classifyIP(ip) {
                const ipParts = ip.split('.').map(Number);
                // Pastikan alamat IP memiliki format yang benar
                if (ipParts.length !== 4 || ipParts.some(part => part < 0 || part > 255)) {
                    return 'Invalid IP address';
                }
                const firstOctet = ipParts[0];
                // Kelas A: 0.0.0.0 - 127.255.255.255
                if (firstOctet >= 0 && firstOctet <= 127) {
                    return 'A';
                }
                // Kelas B: 128.0.0.0 - 191.255.255.255
                if (firstOctet >= 128 && firstOctet <= 191) {
                    return 'B';
                }
                // Kelas C: 192.0.0.0 - 223.255.255.255
                if (firstOctet >= 192 && firstOctet <= 223) {
                    return 'C';
                }
                // Kelas D (Multicast): 224.0.0.0 - 239.255.255.255
                if (firstOctet >= 224 && firstOctet <= 239) {
                    return 'D (Multicast)';
                }
                // Kelas E (Reserved): 240.0.0.0 - 255.255.255.255
                if (firstOctet >= 240 && firstOctet <= 255) {
                    return 'E (Reserved)';
                }
                return 'Invalid IP address';
            }

            function isPublic(ip) {
                const ipParts = ip.split('.').map(Number);
                // Pastikan alamat IP memiliki format yang benar
                if (ipParts.length !== 4 || ipParts.some(part => part < 0 || part > 255)) {
                    return 'Invalid IP address';
                }
                const firstOctet = ipParts[0];
                // Kelas A: 0.0.0.0 - 127.255.255.255
                if (firstOctet <= 192) {
                    return 'Publik';
                } else {
                    return 'Privat';
                }
            }

            function getSubnet(ip, prefix) {
                const ipParts = ip.split('.').map(Number);
                // Pastikan alamat IP memiliki format yang benar
                if (ipParts.length !== 4 || ipParts.some(part => part < 0 || part > 255)) {
                    return 'Invalid IP address';
                }
                const fisrtOctet = ipParts[0];
                const secondOctet = ipParts[1];
                const thirdOctet = ipParts[2];
                const lastOctet = ipParts[3];
                // Ukuran subnet
                const subnetSize = Math.pow(2, (32 - prefix)); // Jumlah alamat dalam subnet
                // Menentukan urutan subnet berdasarkan prefix
                if (prefix >= 24) {
                    let size = subnetSize;
                    return "Ke-" + (Math.floor(lastOctet / size) + 1);
                } else if (prefix >= 16) {
                    let size = subnetSize;
                    return "Ke-" + (Math.floor(thirdOctet / size) + 1);
                } else if (prefix >= 8) {
                    let size = subnetSize;
                    return "Ke-" + (Math.floor(secondOctet / size) + 1);
                } else {
                    let size = subnetSize;
                    return "Ke-" + (Math.floor(firstOctet / size) + 1);
                }
            }

            function ipCheck(ip) {
                const ipParts = ip.split('.').map(Number);
                // Pastikan alamat IP memiliki format yang benar
                if (ipParts.length !== 4 || ipParts.some(part => part < 0 || part > 255)) {
                    return false;
                }
                return true;
            }

            function getSubnetInfo(ip, cidr) {
                const subnetMask = (0xFFFFFFFF << (32 - cidr)) >>> 0;
                const ipInt = (new Uint32Array([ipToInteger(ip)]))[0];
                const networkInt = ipInt & subnetMask;
                const broadcastInt = networkInt | (~subnetMask >>> 0);
                const usableStart = networkInt + 1;
                const usableEnd = broadcastInt - 1;
                const totalHosts = 2 ** (32 - cidr);
                const usableHosts = totalHosts - 2;
                return {
                    'Alamat IP': ip,
                    'IP Network': integerToIp(networkInt),
                    'IP Broadcast': integerToIp(broadcastInt),
                    'Kelas IP': classifyIP(ip),
                    'Jangkauan IP': `${integerToIp(usableStart)} - ${integerToIp(usableEnd)}`,
                    'Urutan Subnet': `${getSubnet(ip, cidr)}`,
                    'Jumlah Host': totalHosts,
                    'Jumlah Host yang dapat Digunakan': usableHosts,
                    'Subnet Mask': integerToIp(subnetMask),
                    'Wildcard Mask': integerToIp(~subnetMask >>> 0),
                    'Subnet Mask (Biner)': ipToBinary(integerToIp(subnetMask)),
                    'Notasi CIDR': `/${cidr}`,
                    'Jenis IP': 'Public',
                    'Notasi IP': `${ip} /${cidr}`,
                    'Alamat IP (Biner)': ipToBinary(ip).replace(/\./g, ''),
                    'Alamat IP (Desimal)': ipInt,
                    'Alamat IP (Hexadesimal)': `0x${ipInt.toString(16)}`,
                    'in-addr.arpa': ip.split('.').reverse().join('.') + '.in-addr.arpa',
                    'IPv4 Mapped Address': `::ffff:${ipInt.toString(16)}`,
                    '6to4 Prefix': `2002:${ipInt.toString(16)}::/48`
                };
            }

            function jsonToTable(jsonData) {
                let table = ' <tbody> ';
                // Menambahkan baris tabel berdasarkan value
                for (const key in jsonData) {
                    table += `
                                                                            <tr>
                                                                                <td>${key}</td>
                                                                                <td>&emsp; : &emsp;</td>
                                                                                <td>${jsonData[key]}</td>
                                                                            </tr>`;
                }
                table += ' </tbody>';
                return table;
            }

            export function calculateSubnet() {
                let IP = document.getElementById('input').value;
                let prefix = document.getElementById('prefixSelect').value;
                if (!ipCheck(IP)) return;
                document.getElementById('ipv4-table').innerHTML = jsonToTable(getSubnetInfo(IP, prefix));
            }

export function init() {
    document.getElementById('mainLayout').innerHTML = `
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-styled-tab" data-tabs-toggle="#default-styled-tab-content" data-tabs-active-classes="text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-500 border-primary-600 dark:border-primary-500" data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300" role="tablist">
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg" id="ipv4-tab" data-tabs-target="#ipv4-content" type="button" role="tab" aria-controls="ipv4" aria-selected="false">IPv4</button>
                </li>
                <li class="me-2" role="presentation">
                    <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="ipv6-tab" data-tabs-target="#ipv6-content" type="button" role="tab" aria-controls="ipv6" aria-selected="false">IPv6</button>
                </li>
            </ul>
        </div>
        <div id="default-styled-tab-content">
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="ipv4-content" role="tabpanel" aria-labelledby="ipv4-tab">
                <div class="border-b border-gray-200 p-3">
    <div class="block p-4 mb-4 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div class="">
            <div class="font-semibold"><i class="bi bi-braces mr-2"></i> Input</div>
        </div>
        <div class="p-4">
            <div class="flex flex-wrap">
                <div class="w-full lg:w-2/3 my-2">
                    <div class="relative">
                        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="input" placeholder="Alamat IP">
                    </div>
                </div>
                <div class="w-full lg:w-1/3 my-2 pl-0 lg:pl-2">
                    <div class="relative">
                        <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="prefixSelect" onselect="" title="assets" onchange="">
                            <option value="32">/32 (255.255.255.255)</option>
                            <option value="31">/31 (255.255.255.254)</option>
                            <option value="30">/30 (255.255.255.252)</option>
                            <option value="29">/29 (255.255.255.248)</option>
                            <option value="28">/28 (255.255.255.240)</option>
                            <option value="27">/27 (255.255.255.224)</option>
                            <option value="26">/26 (255.255.255.192)</option>
                            <option value="25">/25 (255.255.255.128)</option>
                            <option value="24" selected>/24 (255.255.255.0)</option>
                            <option value="23">/23 (255.255.254.0)</option>
                            <option value="22">/22 (255.255.252.0)</option>
                            <option value="21">/21 (255.255.248.0)</option>
                            <option value="20">/20 (255.255.240.0)</option>
                            <option value="19">/19 (255.255.224.0)</option>
                            <option value="18">/18 (255.255.192.0)</option>
                            <option value="17">/17 (255.255.128.0)</option>
                            <option value="16">/16 (255.255.0.0)</option>
                            <option value="15">/15 (255.254.0.0)</option>
                            <option value="14">/14 (255.252.0.0)</option>
                            <option value="13">/13 (255.248.0.0)</option>
                            <option value="12">/12 (255.240.0.0)</option>
                            <option value="11">/11 (255.224.0.0)</option>
                            <option value="10">/10 (255.192.0.0)</option>
                            <option value="9">/9 (255.128.0.0)</option>
                            <option value="8">/8 (255.0.0.0)</option>
                            <option value="7">/7 (254.0.0.0)</option>
                            <option value="6">/6 (252.0.0.0)</option>
                            <option value="5">/5 (248.0.0.0)</option>
                            <option value="4">/4 (240.0.0.0)</option>
                            <option value="3">/3 (224.0.0.0)</option>
                            <option value="2">/2 (192.0.0.0)</option>
                            <option value="1">/1 (128.0.0.0)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="grid">
                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" id="calculateSubnetButton">Enter</button>
            </div>
        </div>
    </div>
    <div class="block p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div>
            <div class="font-semibold"><i class="bi bi-ethernet mr-2"></i> Hasil</div>
        </div>
        <div class="p-4">
            <table id="ipv4-table" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                </table>
        </div>
    </div>
</div>
            </div>
            <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="ipv6-content" role="tabpanel" aria-labelledby="ipv6-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">Fitur untuk <strong class="font-medium text-gray-800 dark:text-white">IPv6</strong> akan hadir nanti. (Coming soon)</p>
            </div>
        </div>
    `;

    const tabsElement = document.getElementById('default-styled-tab');

    const tabElements = [
        {
            id: 'ipv4',
            triggerEl: document.querySelector('#ipv4-tab'),
            targetEl: document.querySelector('#ipv4-content'),
        },
        {
            id: 'ipv6',
            triggerEl: document.querySelector('#ipv6-tab'),
            targetEl: document.querySelector('#ipv6-content'),
        },
    ];

    const options = {
        defaultTabId: 'ipv4', // Set tab IPv4 sebagai aktif pertama
        activeClasses:
            'text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-500 border-primary-600 dark:border-primary-500',
        inactiveClasses:
            'dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
        onShow: () => {
            console.log('tab is shown');
        },
    };

    const instanceOptions = {
        id: 'default-styled-tab',
        override: true
    };

    const tabs = new Tabs(tabsElement, tabElements, options, instanceOptions);
    document.getElementById('calculateSubnetButton').addEventListener('click', function() {
    	calculateSubnet();
    });

    // Anda bisa menghapus baris di bawah ini jika tidak ingin menampilkan tab 'dashboard' secara manual setelah inisialisasi
    // tabs.show('dashboard');
}