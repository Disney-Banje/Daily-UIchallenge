import React from 'react';
import ListItem from './ListItem';
import Rates from './Rates';
import './Product.css'


function Product() {

   const personal = [
        { icon: 'checkmark-circle-outline', 
          text: 'Access to 1,000+ components',
          isComingSoon: false
        },
        { icon: 'checkmark-circle-outline', 
          text: 'Figma Wire-kit', 
          isComingSoon: false 
        },
        { icon: 'checkmark-circle-outline', 
          text: 'Free lifetime updates & support', 
          isComingSoon: false 
        },
        { icon: 'checkmark-circle-outline', 
          text: 'Access all templates $ UI kits', 
          isComingSoon: false 
        },
        { icon: 'checkmark-circle-outline', 
          text: 'Component storage', 
          isComingSoon: true 
        }
      ];
    
      const teams = [
        { icon: 'checkmark-circle-outline', 
          text: 'Shared workspace', 
          isComingSoon: true 
        },
        { icon: 'checkmark-circle-outline',
          text: 'Team Library',
          isComingSoon: true 
        },
        { icon: 'checkmark-circle-outline', 
          text: 'Early access to new tools', 
          isComingSoon: false 
        },
        { icon: 'checkmark-circle-outline', 
          text: 'Unlimited seats', 
          isComingSoon: true 
        },
        { icon: 'checkmark-circle-outline', 
          text: 'New tool support request', 
          isComingSoon: false 
        }
      ];

    return (
        <div className='pricing-details'>
            <div className='personal-group'>
                <h2 className='pricing-group'>Personal</h2>
                <p className='group-tag'>Ideal for individuals & small teams.</p>
                <ul className='feature-list'>
                    {personal.map((item, index) => (
                        <ListItem key={index} {...item} />
                    ))}
                </ul>
                <div className='group_rates'>
                    <Rates
                        price={35}
                        cta='Get early access'
                    />
                </div>
            </div>
            <div className='teams-group'>
                <h2 className='pricing-group'>Teams</h2>
                <p className='group-tag'>Perfect for professional teamss and agencies.</p>

                <div className='container'>
                    <ul className='feature-list'>
                            {personal.map((item, index) => (
                                <ListItem key={index} {...item} />
                            ))}
                    </ul>
                    <ul className='feature-list'>
                        {teams.map((item, index) => (
                            <ListItem key={index} {...item} />
                        ))}
                    </ul>
                </div>

                <div className='group_rates'>
                    <Rates
                        price={175}
                        cta='Get early access'
                        active={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default Product;

