import Link from 'next/link';

export default (props) => (
  <div>
    <div classNameName='top-info'>
      <div className='row'>
        <div className='six columns'>
          <img src={require(props.image_url)} alt='team member' className='avatar' />
        </div>
        <div className='six columns'>
          <h5 className='bold'>{props.firstName} {props.lastName}</h5>
          <p>{props.position}</p>
          <span className='blue-badge'>
            <span className='circle'></span>Core team</span>
        </div>
      </div>
    </div>
    <div className='m-t-md m-b-md'>
      <p>{props.description}</p>
    </div>
  </div>
)