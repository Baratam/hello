angular.module('news.module')

.controller("newsHomeController",  function ($scope) {
$scope.items = [
                    {
                        name: "item1",
                        desc: "@December",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Capgemini announced as a recipient of two Pegasystems Partner Excellence Awards"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini launches a capital increase in the context of the financing of the IGATE acquisition"
                            },
                            {
                                name: "subitem2",
                                desc: "Success of the capital increase launched for the financing of the IGATE acquisition"
                            }]
                    },
                    {
                        name: "item2",
                        desc: "@November",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Capgemini wins multi-million euro contract extension with Nokia for Global Order Management Processing"
                            },
                            {
                                name: "subitem2",
                                desc: "2015 Capital Market Day"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini Honored as the Recipient of EMC Global Innovation Award"
                            }]
                    },
                    {
                        name: "item3",
                        desc: "@October",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Capgemini Chosen as State of Georgia’s Multi-sourcing Service Integrator"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini Introduces New Cloud-Based Banking Platform Solution"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini Canada Named Among Toronto’s Top Employers and Canada’s Best Diversity Employers"
                            }]
                    },
					{
                        name: "item4",
                        desc: "@September",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Capgemini Accelerates Global FinTech Initiative to Meet Market Demand for Innovation"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini has completed the early redemption of the ORNANE bonds"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini successfully places a €500 million bond issue"
                            }]
                    },
					{
                        name: "item5",
                        desc: "@August",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Global Digital Payment Transactions Set to Reach 10 Percent Growth for First Time Finds World Payments Report 2016"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini is Zurich’s chosen provider for core insurance system transformation"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini named a 'Leader’ in IDC MarketScape: Worldwide Oil and Gas Professional Services 2016 Vendor Assessment Report"
                            }]
                    },
					{
                        name: "item6",
                        desc: "@July",
                        subitems: [
                            {
                                name: "subitem1",
                                desc: "Capgemini reports very good results for H1 2016 and raises its full-year margin guidance"
                            },
                            {
                                name: "subitem2",
                                desc: "The Capgemini Group named a Leader in Software Testing by NelsonHall"
                            },
                            {
                                name: "subitem2",
                                desc: "Capgemini unifies automation technologies with Automation Drive, a single suite of services to accelerate client growth"
                            }]
                    }
                ];

$scope.default = $scope.items[2];
});


